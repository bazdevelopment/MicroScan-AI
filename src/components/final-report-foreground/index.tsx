/* eslint-disable max-lines-per-function */
import { router } from 'expo-router';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { translate } from '@/core';
import { colors, Text } from '@/ui';
import { CloseIcon, DownloadIcon, ShareIcon } from '@/ui/assets/icons';

import { type IHomeForeground } from '../home-foreground/home-forground.interface';

export const FinalReportForeground = ({ scrollValue }: IHomeForeground) => {
  const foregroundWrapperAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollValue.value,
        [0, 150, 100],
        [1, 0, 0],
        'clamp',
      ),
    };
  }, [scrollValue]);

  return (
    <View className="h-[90px] rounded-b-[50px] bg-primary-900">
      <Animated.View
        style={foregroundWrapperAnimatedStyle}
        className="flex-column"
      >
        <View className="flex-row justify-between px-5">
          <TouchableOpacity onPress={router.back}>
            <CloseIcon color={colors.white} width={26} height={26} />
          </TouchableOpacity>
          <View className="flex-row gap-6">
            <ShareIcon color={colors.white} width={20} height={20} />
            <DownloadIcon color={colors.white} width={20} height={20} />
          </View>
        </View>

        <View className="mt-2 self-center rounded-full bg-white px-4 py-2">
          {/* <GradientText colors={[colors.lightSkyBlue, colors.primaryPurple]}> */}
          <Text className="text-center font-bold-nunito text-base">
            {translate('flows.createReport.finalReportForeground.message')}
          </Text>
          {/* </GradientText> */}
        </View>
      </Animated.View>
    </View>
  );
};
