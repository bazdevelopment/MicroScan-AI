/* eslint-disable max-lines-per-function */
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { useState } from 'react';
import { Linking, Platform } from 'react-native';

import CustomAlert from '@/components/custom-alert';
import Toast from '@/components/toast';
import {
  IMAGE_SIZE_LIMIT_MB,
  VIDEO_LENGTH_SECONDS_LIMIT,
  VIDEO_SIZE_LIMIT_MB,
} from '@/constants/limits';

import { translate } from '../i18n';
import { checkFileSize } from '../utilities/check-file-size';
import { generateUniqueId } from '../utilities/generate-unique-id';
import { getFileSizeInMB } from '../utilities/get-file-size-in-mb';
import { getImageExtension } from '../utilities/get-image-extension';
import { getVideoDuration } from '../utilities/get-video-duration';
import { isVideoDurationLong } from '../utilities/is-video-duration-long';
import { wait } from '../utilities/wait';
import useRemoteConfig from './use-remote-config';

interface IMediaPicker {
  onCloseModal: () => void;
}

export const useMediaPickerChat = ({ onCloseModal }: IMediaPicker) => {
  const [files, setFiles] = useState([]);
  const { MAX_IMAGES_SELECTION_LIMIT } = useRemoteConfig();

  const handleRemoveFile = (fileId: string) => {
    const newFiles = files.filter((file) => file.id !== fileId);
    setFiles(newFiles);
  };
  const handleResetFiles = () => {
    setFiles([]);
  };

  const handleLoadFile = (files) => {
    const preparedFiles = files.map((file) => ({
      ...file,
      id: generateUniqueId(),
    }));
    setFiles(preparedFiles);
  };

  const handleChooseImageFromGallery = async () => {
    try {
      onCloseModal();
      // Request media library permissions
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      // Check if the permission is granted
      if (status !== 'granted') {
        Toast.warning(translate('alerts.mediaPickerPermissions'), {
          duration: Infinity,
          action: {
            label: translate('general.openSettings'),
            onClick: () => {
              if (Platform.OS === 'ios') {
                Linking.openURL('app-settings:');
              } else {
                Linking.openSettings();
              }
            },
          },
        });
        return;
      }

      // Launch the image library picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsMultipleSelection: true,
        allowsEditing: false, // Disable editing for multiple selection
        quality: 0.9, //!if you use quality=1 the image size will be bigger and the risk is to exceed the AI limit (5MB currently)
        base64: false,
        selectionLimit: MAX_IMAGES_SELECTION_LIMIT || 8,
      });

      // Check if the user didn't cancel the action and assets are available
      if (result.canceled || !result.assets || result.assets.length === 0) {
        return;
      }

      const assets = result.assets;
      // Check for mixed media types (images and videos together)
      const hasImages = assets.some((asset) => asset.type === 'image');
      const hasVideos = assets.some((asset) => asset.type === 'video');

      if (hasImages && hasVideos) {
        wait(1000).then(() =>
          Toast.showCustomToast(
            <CustomAlert
              title={translate('general.attention')}
              subtitle={translate('alerts.mixedMediaNotAllowed')} // You'll need to add this translation
              buttons={[
                {
                  label: translate('general.close'),
                  variant: 'default',
                  onPress: Toast.dismiss,
                  buttonTextClassName: 'dark:text-white',
                  className:
                    'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                },
              ]}
            />,
            {
              position: 'middle',
              duration: Infinity,
            }
          )
        );
        return;
      }

      // Handle video files (only single video allowed)
      if (hasVideos) {
        if (assets.length > 1) {
          wait(1000).then(() =>
            Toast.showCustomToast(
              <CustomAlert
                title={translate('general.attention')}
                subtitle={translate('alerts.multipleVideosNotAllowed')} // You'll need to add this translation
                buttons={[
                  {
                    label: translate('general.close'),
                    variant: 'default',
                    onPress: Toast.dismiss,
                    buttonTextClassName: 'dark:text-white',
                    className:
                      'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                  },
                ]}
              />,
              {
                position: 'middle',
                duration: Infinity,
              }
            )
          );
          return;
        }

        const asset = assets[0];
        const isLongVideo = isVideoDurationLong(asset.duration as number);

        if (isLongVideo) {
          Toast.error(
            translate('alerts.videoLimitExceeds', {
              videoSecondsLimit: VIDEO_LENGTH_SECONDS_LIMIT,
            }),
            {
              closeButton: true,
              duration: Infinity,
            }
          );
          return;
        }

        const sizeInMb = getFileSizeInMB(asset.fileSize as number);
        const { isLimitReached } = checkFileSize(Number(sizeInMb), 'video');

        if (!isLimitReached) {
          handleLoadFile(assets);
          // onUploadFinished({
          //   fileMimeType: asset.mimeType,
          //   fileExtension: getImageExtension(asset.fileName as string),
          //   fileUri: asset.uri,
          //   fileName: asset.fileName,
          // });
        } else {
          Toast.showCustomToast(
            <CustomAlert
              title={translate('general.attention')}
              subtitle={translate('alerts.videoSizeLarge', {
                fileSize: Number(sizeInMb),
                videoLimit: VIDEO_SIZE_LIMIT_MB,
              })}
              buttons={[
                {
                  label: translate('general.close'),
                  variant: 'default',
                  onPress: Toast.dismiss,
                  buttonTextClassName: 'dark:text-white',
                  className:
                    'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                },
              ]}
            />,
            {
              position: 'middle',
              duration: Infinity,
            }
          );
        }
        return;
      }

      // Handle multiple images
      if (hasImages) {
        const processedImages = [];
        let hasErrors = false;

        for (const asset of assets) {
          try {
            const originalSizeInMb = getFileSizeInMB(asset.fileSize as number);
            const { isLimitReached: originalLimitReached } = checkFileSize(
              Number(originalSizeInMb),
              'image'
            );

            let finalAsset = asset;
            let finalMimeType = asset.mimeType;
            let finalExtension = getImageExtension(asset.fileName as string);
            let finalFileName = asset.fileName;

            // If original image exceeds limit, compress it
            if (originalLimitReached) {
              const compressedImage = await compressImage(asset.uri);
              const compressedSizeInMb = getFileSizeInMB(
                compressedImage.fileSize
              );
              const { isLimitReached: compressedLimitReached } = checkFileSize(
                Number(compressedSizeInMb),
                'image'
              );

              if (compressedLimitReached) {
                Toast.showCustomToast(
                  <CustomAlert
                    title={translate('general.attention')}
                    subtitle={translate('alerts.imageSizeLarge', {
                      fileSize: Number(compressedSizeInMb),
                      imageLimit: IMAGE_SIZE_LIMIT_MB,
                      fileName: asset.fileName || 'Unknown',
                    })}
                    buttons={[
                      {
                        label: translate('general.close'),
                        variant: 'default',
                        onPress: Toast.dismiss,
                        buttonTextClassName: 'dark:text-white',
                        className:
                          'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                      },
                    ]}
                  />,
                  {
                    position: 'middle',
                    duration: Infinity,
                  }
                );
                hasErrors = true;
                continue; // Skip this image but continue with others
              }

              // Use compressed image
              finalAsset = { ...asset, uri: compressedImage.uri };
              finalMimeType = 'image/jpeg';
              finalExtension = compressedImage.fileExtension;
              finalFileName = compressedImage.fileName;
            }

            processedImages.push({
              fileMimeType: finalMimeType,
              fileExtension: finalExtension,
              fileUri: finalAsset.uri,
              fileName: finalFileName,
            });

            // Load each file
          } catch (imageError) {
            console.error('Error processing image:', imageError);
            hasErrors = true;
          }
        }

        // Call onUploadFinished for each successfully processed image
        if (processedImages.length > 0) {
          handleLoadFile(processedImages);
        }

        // Show summary message if there were errors
        if (hasErrors && processedImages.length > 0) {
          Toast.warning(translate('alerts.mediaFilesUploadFiles'), {
            closeButton: true,
            duration: 5000,
          });
        } else if (hasErrors && processedImages.length === 0) {
          Toast.error(translate('alerts.mediaFilesUploadFiles'), {
            closeButton: true,
            duration: Infinity,
          });
        }
      }
    } catch (error) {
      console.error('Error in handleChooseImageFromGallery:', error);
      Toast.error(translate('alerts.errorSelectingImagePicker'), {
        closeButton: true,
        duration: Infinity,
      });
    }
  };

  const handleChooseFromFiles = async () => {
    try {
      // Launch the document picker for selecting files
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'video/*', 'application/pdf'], // Images, videos, PDFs, and Word documents (word not supported yet)
        multiple: true,
      });
      onCloseModal(); //!very important to close the modal here after the document picker launch (especially for ios)

      // Check if the user canceled the action or if no assets are available
      if (!result.assets || result.assets.length === 0) {
        return;
      }

      const assets = result.assets;

      // Check for different media types
      const hasImages = assets.some((asset) =>
        asset.mimeType?.startsWith('image')
      );
      const hasVideos = assets.some((asset) =>
        asset.mimeType?.startsWith('video')
      );
      const hasDocs = assets.some((asset) =>
        asset.mimeType?.startsWith('application')
      );

      // Count different types
      const typeCount = [hasImages, hasVideos, hasDocs].filter(Boolean).length;

      // Check for mixed media types (images, videos, and documents together)
      if (typeCount > 1) {
        wait(1000).then(() =>
          Toast.showCustomToast(
            <CustomAlert
              title={translate('general.attention')}
              subtitle={translate('alerts.mixedMediaNotAllowed')}
              buttons={[
                {
                  label: translate('general.close'),
                  variant: 'default',
                  onPress: Toast.dismiss,
                  buttonTextClassName: 'dark:text-white',
                  className:
                    'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                },
              ]}
            />,
            {
              position: 'middle',
              duration: Infinity,
            }
          )
        );
        return;
      }

      // Handle video files (only single video allowed)
      if (hasVideos) {
        if (assets.length > 1) {
          wait(1000).then(() =>
            Toast.showCustomToast(
              <CustomAlert
                title={translate('general.attention')}
                subtitle={translate('alerts.multipleVideosNotAllowed')}
                buttons={[
                  {
                    label: translate('general.close'),
                    variant: 'default',
                    onPress: Toast.dismiss,
                    buttonTextClassName: 'dark:text-white',
                    className:
                      'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                  },
                ]}
              />,
              {
                position: 'middle',
                duration: Infinity,
              }
            )
          );
          return;
        }

        const asset = assets[0];
        const videoDuration = await getVideoDuration(asset.uri);
        const isLongVideo = isVideoDurationLong(videoDuration as number);

        if (videoDuration && isLongVideo) {
          wait(1000).then(() =>
            Toast.error(
              translate('alerts.videoLimitExceeds', {
                videoSecondsLimit: VIDEO_LENGTH_SECONDS_LIMIT,
              }),
              {
                closeButton: true,
                duration: Infinity,
              }
            )
          );
          return;
        }

        const sizeInMb = getFileSizeInMB(asset.size as number);
        const { isLimitReached } = checkFileSize(Number(sizeInMb), 'video');

        if (!isLimitReached) {
          handleLoadFile(assets);
        } else {
          wait(1000).then(() =>
            Toast.showCustomToast(
              <CustomAlert
                title={translate('general.attention')}
                subtitle={translate('alerts.videoSizeLarge', {
                  fileSize: Number(sizeInMb),
                  videoLimit: VIDEO_SIZE_LIMIT_MB,
                })}
                buttons={[
                  {
                    label: translate('general.close'),
                    variant: 'default',
                    onPress: Toast.dismiss,
                    buttonTextClassName: 'dark:text-white',
                    className:
                      'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                  },
                ]}
              />,
              {
                position: 'middle',
                duration: Infinity,
              }
            )
          );
        }
        return;
      }

      // Handle document files (PDFs, Word docs)
      if (hasDocs) {
        const processedDocs = [];
        let hasErrors = false;

        for (const asset of assets) {
          try {
            // const sizeInMb = getFileSizeInMB(asset.size as number);
            // const { isLimitReached } = checkFileSize(
            //   Number(sizeInMb),
            //   'document'
            // );

            // if (isLimitReached) {
            //   wait(1000).then(() =>
            //     Toast.showCustomToast(
            //       <CustomAlert
            //         title={translate('general.attention')}
            //         subtitle={translate('alerts.documentSizeLarge', {
            //           fileSize: Number(sizeInMb),
            //           documentLimit: DOCUMENT_SIZE_LIMIT_MB,
            //           fileName: asset.name || 'Unknown',
            //         })}
            //         buttons={[
            //           {
            //             label: translate('general.close'),
            //             variant: 'default',
            //             onPress: Toast.dismiss,
            //             buttonTextClassName: 'dark:text-white',
            //             className:
            //               'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
            //           },
            //         ]}
            //       />,
            //       {
            //         position: 'middle',
            //         duration: Infinity,
            //       }
            //     )
            //   );
            //   hasErrors = true;
            //   continue;
            // }

            processedDocs.push({
              fileMimeType: asset.mimeType,
              fileExtension: asset.name.split('.').pop() || '',
              fileUri: asset.uri,
              fileName: asset.name,
            });
          } catch (docError) {
            hasErrors = true;
          }
        }

        if (processedDocs.length > 0) {
          handleLoadFile(processedDocs);
        }

        if (hasErrors && processedDocs.length > 0) {
          Toast.warning(translate('alerts.someDocumentsSkipped'), {
            closeButton: true,
            duration: 5000,
          });
        } else if (hasErrors && processedDocs.length === 0) {
          Toast.error(translate('alerts.allDocumentsFailed'), {
            closeButton: true,
            duration: Infinity,
          });
        }
        return;
      }

      // Handle multiple images
      if (hasImages) {
        const processedImages = [];
        let hasErrors = false;

        for (const asset of assets) {
          try {
            const originalSizeInMb = getFileSizeInMB(asset.size as number);
            const { isLimitReached: originalLimitReached } = checkFileSize(
              Number(originalSizeInMb),
              'image'
            );

            let finalAsset = asset;
            let finalMimeType = asset.mimeType;
            let finalExtension = getImageExtension(asset.name);
            let finalFileName = asset.name;

            // If original image exceeds limit, compress it
            if (originalLimitReached) {
              const compressedImage = await compressImage(asset.uri);
              const compressedSizeInMb = getFileSizeInMB(
                compressedImage.fileSize
              );
              const { isLimitReached: compressedLimitReached } = checkFileSize(
                Number(compressedSizeInMb),
                'image'
              );

              if (compressedLimitReached) {
                wait(1000).then(() =>
                  Toast.showCustomToast(
                    <CustomAlert
                      title={translate('general.attention')}
                      subtitle={translate('alerts.imageSizeLarge', {
                        fileSize: Number(compressedSizeInMb),
                        imageLimit: IMAGE_SIZE_LIMIT_MB,
                        fileName: asset.name || 'Unknown',
                      })}
                      buttons={[
                        {
                          label: translate('general.close'),
                          variant: 'default',
                          onPress: Toast.dismiss,
                          buttonTextClassName: 'dark:text-white',
                          className:
                            'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                        },
                      ]}
                    />,
                    {
                      position: 'middle',
                      duration: Infinity,
                    }
                  )
                );
                hasErrors = true;
                continue; // Skip this image but continue with others
              }

              // Use compressed image
              finalAsset = { ...asset, uri: compressedImage.uri };
              finalMimeType = 'image/jpeg';
              finalExtension = compressedImage.fileExtension;
              finalFileName = compressedImage.fileName;
            }

            processedImages.push({
              fileMimeType: finalMimeType,
              fileExtension: finalExtension,
              fileUri: finalAsset.uri,
              fileName: finalFileName,
            });
          } catch (imageError) {
            hasErrors = true;
          }
        }

        // Call onUploadFinished for processed images
        if (processedImages.length > 0) {
          handleLoadFile(processedImages);
        }

        // Show summary message if there were errors
        if (hasErrors && processedImages.length > 0) {
          Toast.warning(translate('alerts.someImagesSkipped'), {
            closeButton: true,
            duration: 5000,
          });
        } else if (hasErrors && processedImages.length === 0) {
          Toast.error(translate('alerts.allImagesFailed'), {
            closeButton: true,
            duration: Infinity,
          });
        }
      }
    } catch (error) {
      Toast.error(translate('alerts.errorSelectingDocumentPicker'), {
        closeButton: true,
        duration: Infinity,
      });
    }
  };

  const handleTakePhoto = async () => {
    onCloseModal();
    try {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      // Check if the permission is granted
      if (status !== 'granted') {
        wait(500).then(() =>
          Toast.error(translate('alerts.mediaPickerPermissions'), {
            closeButton: true,
            duration: Infinity,
            action: {
              label: translate('general.openSettings'),
              onClick: () => {
                if (Platform.OS === 'ios') {
                  Linking.openURL('app-settings:');
                } else {
                  Linking.openSettings();
                }
              },
            },
          })
        );
        return;
      }

      // Launch the camera
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true, // Disable editing for consistency with gallery
        quality: 0.9, //!if you use quality=1 the image size will be bigger and the risk is to exceed the AI limit (5MB currently)
        base64: false,
      });

      // Check if the user didn't cancel the action and assets are available
      if (result.canceled || !result.assets || result.assets.length === 0) {
        return;
      }

      const assets = result.assets;

      // Camera only produces images, so we don't need to check for mixed media types
      // Handle multiple images (camera should only produce images)
      const processedImages = [];
      let hasErrors = false;

      for (const asset of assets) {
        try {
          const originalSizeInMb = getFileSizeInMB(asset.fileSize as number);
          const { isLimitReached: originalLimitReached } = checkFileSize(
            Number(originalSizeInMb),
            'image'
          );

          let finalAsset = asset;
          let finalMimeType = asset.mimeType;
          let finalExtension = getImageExtension(asset.fileName as string);
          let finalFileName = asset.fileName;

          // If original image exceeds limit, compress it
          if (originalLimitReached) {
            const compressedImage = await compressImage(asset.uri);
            const compressedSizeInMb = getFileSizeInMB(
              compressedImage.fileSize
            );
            const { isLimitReached: compressedLimitReached } = checkFileSize(
              Number(compressedSizeInMb),
              'image'
            );

            if (compressedLimitReached) {
              Toast.showCustomToast(
                <CustomAlert
                  title={translate('general.attention')}
                  subtitle={translate('alerts.imageSizeLarge', {
                    fileSize: Number(compressedSizeInMb),
                    imageLimit: IMAGE_SIZE_LIMIT_MB,
                    fileName: asset.fileName || 'Unknown',
                  })}
                  buttons={[
                    {
                      label: translate('general.close'),
                      variant: 'default',
                      onPress: Toast.dismiss,
                      buttonTextClassName: 'dark:text-white',
                      className:
                        'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                    },
                  ]}
                />,
                {
                  position: 'middle',
                  duration: Infinity,
                }
              );
              hasErrors = true;
              continue; // Skip this image but continue with others
            }

            // Use compressed image
            finalAsset = { ...asset, uri: compressedImage.uri };
            finalMimeType = 'image/jpeg';
            finalExtension = compressedImage.fileExtension;
            finalFileName = compressedImage.fileName;
          }

          processedImages.push({
            fileMimeType: finalMimeType,
            fileExtension: finalExtension,
            fileUri: finalAsset.uri,
            fileName: finalFileName,
          });

          // Load each file
        } catch (imageError) {
          console.error('Error processing image:', imageError);
          hasErrors = true;
        }
      }

      // Call onUploadFinished for processed images
      if (processedImages.length > 0) {
        handleLoadFile(processedImages);
      }

      // Show summary message if there were errors
      if (hasErrors && processedImages.length > 0) {
        Toast.warning(translate('alerts.someImagesSkipped'), {
          closeButton: true,
          duration: 5000,
        });
      } else if (hasErrors && processedImages.length === 0) {
        Toast.error(translate('alerts.allImagesFailed'), {
          closeButton: true,
          duration: Infinity,
        });
      }
    } catch (error) {
      console.error('Error in handleTakePhoto:', error);
      Toast.error(translate('alerts.errorTakingPicture'), {
        closeButton: true,
        duration: Infinity,
      });
    }
  };

  return {
    onChooseImageFromGallery: handleChooseImageFromGallery,
    onChooseFromFiles: handleChooseFromFiles,
    onTakePhoto: handleTakePhoto,
    onRemoveFile: handleRemoveFile,
    onResetFiles: handleResetFiles,
    files,
  };
};

/**
 * Compresses an image file and returns detailed information
 * @param imageUri - The URI of the image to compress
 * @param compressionQuality - Value between 0 and 1, where lower means more compression (default: 0.6)
 * @returns Promise that resolves to an object containing the compressed image details, file size, name and extension
 */
export const compressImage = async (
  imageUri: string,
  compressionQuality: number = 0.6
): Promise<{
  uri: string;
  width: number;
  height: number;
  fileSize: number;
  fileName: string;
  fileExtension: string;
}> => {
  try {
    // Compress the image
    const compressedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [], // No transformations like resize or rotate
      {
        compress: compressionQuality, // Compression value between 0 and 1
        format: ImageManipulator.SaveFormat.JPEG,
      }
    );

    // Get the file size of the compressed image
    const fileInfo = await FileSystem.getInfoAsync(compressedImage.uri, {
      size: true,
    });

    // Extract file name and extension from URI
    const uriComponents = compressedImage.uri.split('/');
    const fullFileName = uriComponents[uriComponents.length - 1];

    // Handle file name and extension
    let fileName = fullFileName;
    let fileExtension = 'jpg'; // Default since we're using JPEG format

    if (fullFileName.includes('.')) {
      const nameParts = fullFileName.split('.');
      fileExtension = nameParts.pop() || 'jpg';
      fileName = nameParts.join('.');
    }

    return {
      uri: compressedImage.uri,
      width: compressedImage.width,
      height: compressedImage.height,
      fileSize: fileInfo.size || 0,
      fileName: fileName,
      fileExtension: fileExtension,
    };
  } catch (error) {
    console.error('Error compressing image:', error);
    throw new Error('Failed to compress image');
  }
};
