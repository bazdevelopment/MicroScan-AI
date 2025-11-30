import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export interface IMediPickerFile {
  id: string;
  fileUri: string;
  fileName: string;
  fileMimeType: string;
  fileExtension: string;
}

interface ImagePreviewGalleryProps {
  files: IMediPickerFile[];
  onRemoveFile: (fileId: string) => void;
}

const ImagePreviewGallery: React.FC<ImagePreviewGalleryProps> = ({
  files,
  onRemoveFile,
}) => {
  if (files.length === 0) {
    return null; // Don't render anything if there are no files
  }

  const isDocument = (mimeType: string) => {
    return mimeType?.startsWith('application/');
  };

  const isVideo = (mimeType: string) => {
    return mimeType?.startsWith('video/');
  };

  const getDocumentIcon = (fileExtension: string) => {
    const ext = fileExtension?.toLowerCase();
    if (ext === 'pdf') return 'document-text';
    if (ext === 'doc' || ext === 'docx') return 'document-text';
    if (ext === 'xls' || ext === 'xlsx') return 'stats-chart';
    if (ext === 'ppt' || ext === 'pptx') return 'easel';
    return 'document-attach';
  };

  const truncateFileName = (fileName: string, maxLength: number = 12) => {
    if (fileName.length <= maxLength) return fileName;
    const extension = fileName.split('.').pop() || '';
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const truncatedName = nameWithoutExt.substring(
      0,
      maxLength - extension.length - 4
    );
    return `${truncatedName}...${extension}`;
  };

  return (
    <View className="border-t border-gray-200 p-2 dark:border-gray-700">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {files.map((file) => {
          const isDoc = isDocument(file.fileMimeType);
          const isVid = isVideo(file.mimeType);
          return (
            <View key={file.id} className="relative m-1">
              {isDoc ? (
                // Document Preview
                <View className="h-24 w-20 items-center justify-center rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
                  <View className="h-16 w-full items-center justify-center">
                    <Ionicons
                      name={getDocumentIcon(file.fileExtension)}
                      size={32}
                      color="#6B7280"
                      className="dark:color-gray-400"
                    />
                  </View>
                  <Text
                    className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400"
                    numberOfLines={2}
                    ellipsizeMode="middle"
                  >
                    {truncateFileName(file.fileName)}
                  </Text>
                </View>
              ) : (
                // Image/Video Preview
                <View className="size-20 rounded-xl">
                  <Image
                    source={{ uri: file.fileUri || file?.uri }}
                    className="size-full rounded-xl"
                    resizeMode="cover"
                  />
                  {isVid && (
                    <View className="absolute inset-0 items-center justify-center rounded-xl bg-black/30">
                      <Ionicons name="play-circle" size={32} color="white" />
                    </View>
                  )}
                </View>
              )}

              {/* Remove Button */}
              <TouchableOpacity
                className="absolute -right-1 -top-1 z-10 size-6 items-center justify-center rounded-full border-2 border-white bg-black/60"
                onPress={() => onRemoveFile(file.id)}
              >
                <Ionicons name="close" size={16} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ImagePreviewGallery;
