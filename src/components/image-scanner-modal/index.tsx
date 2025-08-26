/* eslint-disable max-lines-per-function */
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Image, Modal, StyleSheet, View } from 'react-native';

import { LOADING_MESSAGES_IMAGE_SCANNING } from '@/constants/loading-messages';
import { translate } from '@/core';
import useBackHandler from '@/core/hooks/use-back-handler';
import { Button, colors } from '@/ui';
import { CloseIcon, RetryIcon } from '@/ui/assets/icons';

import BounceLoader from '../bounce-loader';
import VideoPlayer from '../video';
import { type IImageScannerModal } from './image-scanner-modal.interface';
import { imageScannerModalStyles } from './image-scanner-modal.styles';

const ScanningModal = ({
  visible,
  onClose,
  filePath,
  error,
  isPending,
  onRetry,
  isVideo,
}: IImageScannerModal) => {
  useBackHandler(() => true);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <BlurView
        blurAmount={10}
        style={[
          StyleSheet.absoluteFill,
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          },
        ]}
        blurType="dark"
      />
      <View className="flex-1 items-center justify-center px-10">
        <View>
          {isVideo ? (
            <View className="size-[300px]">
              <VideoPlayer
                videoSource={filePath as string}
                additionalVideoStyles={{ width: 300, height: 300 }}
              />
            </View>
          ) : (
            <Image
              source={{
                uri: filePath as string,
              }}
              className="size-[300px] rounded-xl"
              resizeMode="cover"
            />
          )}

          {isPending && (
            <View className="absolute inset-0 items-center justify-center">
              <LottieView
                source={require('assets/lottie/scan-animation.json')}
                autoPlay
                loop
                style={imageScannerModalStyles.lottieView}
              />
            </View>
          )}
        </View>
        {isPending && (
          <BounceLoader
            className="mt-10"
            textClassName="text-white"
            loadingMessages={LOADING_MESSAGES_IMAGE_SCANNING}
          />
        )}
        <View className="flex-column mt-10 gap-5">
          {!!error && (
            <View className="justify-center gap-5">
              <Button
                variant="default"
                label={translate('general.retry')}
                onPress={onRetry}
                className="h-12 min-w-[200] rounded-xl border-2 border-primary-900 bg-black active:opacity-80 dark:bg-black"
                textClassName="text-white dark:text-white"
                disabled={isPending}
                icon={<RetryIcon color={colors.white} width={18} height={18} />}
              />

              <Button
                label={translate('general.close')}
                onPress={onClose}
                variant="default"
                className="w-[100] justify-center self-center rounded-full bg-black active:opacity-80 dark:bg-white"
                textClassName="text-white dark:text-black"
                disabled={isPending}
                icon={
                  <CloseIcon
                    color={isDark ? colors.black : colors.white}
                    width={18}
                    height={18}
                  />
                }
              />
            </View>
          )}
          {/* {!!error && (
            <Text className="text-center text-danger-400 dark:text-danger-400">
              {error.toString()}
            </Text>
          )} */}
        </View>
      </View>
    </Modal>
  );
};

export default ScanningModal;
