import React from 'react';
import { View } from 'react-native';
import { tv } from 'tailwind-variants';

import { Image, Text, useModal } from '@/ui';
import { Camera } from '@/ui/assets/icons';

import Icon from '../icon';
import { UploadPictureModal } from '../modals/upload-profile-picture-modal';
import { type IAvatar } from './avatar.interface';

const Avatar = ({
  size = 'medium',
  shape = 'circle',
  image,
  altText = '',
  withBorder = false,
  showInitials = false,
  initials = '',
  textColor = 'text-black',
  className = '',
  style = {},
  isEditable,
}: IAvatar) => {
  const modal = useModal();

  const styles = React.useMemo(
    () => avatar({ size, shape, withBorder }),
    [size, shape, withBorder]
  );
  return (
    <View className={styles.container({ className })} style={style}>
      {image ? (
        <>
          <Image
            source={image}
            className={styles.image()}
            accessibilityLabel={altText}
          />

          {isEditable && (
            <Icon
              containerStyle="bg-primary-900 p-2 items-center justify-center absolute bottom-[-20] rounded-xl"
              icon={<Camera />}
              size={20}
              color="white"
              onPress={modal.present}
            />
          )}
        </>
      ) : (
        showInitials && (
          <View className={styles.name()}>
            <Text className={`${textColor} font-bold-nunito text-lg`}>
              {initials}
            </Text>
          </View>
        )
      )}
      {/* TODO: check if you can replace the below modal with the une used for uploading scans */}
      <UploadPictureModal ref={modal.ref} />
    </View>
  );
};

export default Avatar;

const avatar = tv({
  slots: {
    container: 'items-center justify-center',
    image: 'size-full bg-primary-200 dark:bg-blackBeauty',
    name: 'items-center justify-center',
  },
  variants: {
    size: {
      small: {
        image: 'size-10',
        name: 'size-10',
      },
      medium: {
        image: 'size-16',
        name: 'size-12',
      },
      large: {
        image: 'size-[65px]',
        name: 'size-14',
      },
      xl: {
        image: 'size-[100px]',
        name: 'size-14',
      },
    },
    shape: {
      circle: {
        image: 'rounded-full',
        name: 'rounded-full',
      },
      rounded: {
        image: 'rounded-lg',
        name: 'rounded-lg',
      },
      square: {
        image: 'rounded-none',
        name: 'rounded-none',
      },
      'rounded-xl': {
        image: 'rounded-2xl',
        name: 'rounded-none',
      },
    },
    withBorder: {
      true: {
        image: 'border-2 border-neutral-400',
        name: 'border-[1.5px] border-primary-200',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    shape: 'circle',
    withBorder: false,
  },
});
