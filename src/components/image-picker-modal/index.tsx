import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal, Pressable, TouchableOpacity, View } from 'react-native';

import { translate } from '@/core';
import { Text } from '@/ui';

type ImagePickerModalProps = {
  title?: string;
  data?: string[];
  isVisible: boolean;
  onCancelPress?: () => void;
  onBackdropPress?: () => void;
  onPress?: (result: any) => void;
  onChooseImageFromGallery: () => void;
  onChooseFromFiles: () => void;
  onTakePhoto: () => void;
};

export const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  title = '',
  isVisible,
  onCancelPress,
  onBackdropPress,
  onChooseImageFromGallery,
  onChooseFromFiles,
  onTakePhoto,
}) => {
  const data = [
    {
      title: translate('components.ImagePickerModal.photoLibrary'),
      icon: 'photo-library',
      action: onChooseImageFromGallery,
    },
    {
      title: translate('components.ImagePickerModal.takePhoto'),
      icon: 'photo-camera',
      action: onTakePhoto,
    },
    {
      title: translate('components.ImagePickerModal.chooseFile'),
      icon: 'folder',
      action: onChooseFromFiles,
    },
  ];

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onBackdropPress}
    >
      <Pressable className="flex-1 bg-black/40 " onPress={onBackdropPress}>
        <View className="absolute bottom-20 left-20 w-72 flex-1 overflow-hidden rounded-2xl bg-neutral-800 shadow-lg">
          {title ? (
            <Text className="border-b border-neutral-700 py-2 text-center text-sm text-gray-300">
              {title}
            </Text>
          ) : null}

          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.action}
              className={`flex-row items-center justify-between border-b border-neutral-700 px-4 py-3 ${
                index === data.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <Text className="text-base text-white">{item.title}</Text>
              <MaterialIcons name={item.icon as any} size={22} color="white" />
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            className="w-72 rounded-2xl border-t border-neutral-700 bg-neutral-800 py-1 py-4 shadow-lg "
            onPress={onCancelPress}
          >
            <Text className="px-4 font-semibold-nunito text-white">
              {translate('general.cancel')}
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};
