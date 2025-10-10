/* eslint-disable max-lines-per-function */
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import Avatar from '@/components/avatar';
import FadeInView from '@/components/fade-in-view/fade-in-view';
import PremiumFeaturesOverview from '@/components/premium-features-overivew';
import { translate } from '@/core/i18n';
import { DEVICE_TYPE } from '@/core/utilities/device-type';
import getDeviceSizeCategory from '@/core/utilities/get-device-size-category';
import { requestAppRatingWithDelay } from '@/core/utilities/request-app-review';
import { Button, colors, Text } from '@/ui';
import { ArrowRightSharp } from '@/ui/assets/icons/arrow-right-sharp';
import { StarIcon } from '@/ui/assets/icons/star';
import HorizontalLine from '@/ui/horizontal-line';

// Social Proof Component
const SocialProofCard = () => (
  <View className="rounded-2xl bg-white/90 p-5 dark:bg-charcoal-900">
    <View className="mb-1 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <View className="mr-3 size-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
          <Avatar
            image={require('../../../ui/assets/images/doctor-microscopy.png')}
            size="small"
            shape="circle"
          />
        </View>
        <View className="flex-row gap-4">
          <Text className="font-bold-nunito text-lg text-gray-900">
            Emma L.
          </Text>
          <View className="flex-row gap-1">
            <StarIcon color={colors.warning[400]} fill={colors.warning[400]} />
            <StarIcon color={colors.warning[400]} fill={colors.warning[400]} />
            <StarIcon color={colors.warning[400]} fill={colors.warning[400]} />
            <StarIcon color={colors.warning[400]} fill={colors.warning[400]} />
            <StarIcon color={colors.warning[400]} fill={colors.warning[400]} />
          </View>
        </View>
      </View>
    </View>

    <Text className="font-bold-nunito text-base leading-5 ">
      {translate('rootLayout.screens.freeTrialPreview.review')}
    </Text>
    <Text className="mt-2 text-sm text-gray-900">
      {translate('rootLayout.screens.freeTrialPreview.reviewTrust')}
    </Text>
  </View>
);

const FreeTrialPreview = ({
  totalSteps,
  currentScreenIndex,
  goToNextScreen,
  onSkip,
}) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { isVerySmallDevice } = getDeviceSizeCategory();

  useEffect(() => {
    requestAppRatingWithDelay(500);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-primary-900 dark:bg-black">
      <LinearGradient
        colors={
          isDark
            ? [colors.black, colors.charcoal[900]]
            : [colors.primary[900], colors.primary[800]]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.0, 1.0]}
        style={{ flex: 1 }}
      >
        {/* <FocusAwareStatusBar hidden /> */}

        <ScrollView
          className={`flex-1 px-5 ${DEVICE_TYPE.ANDROID && isVerySmallDevice ? 'pt-[10]' : 'pt-[20]'}`}
          showsVerticalScrollIndicator={false}
        >
          <Text className="mb-2 text-center font-bold-nunito text-4xl text-white">
            {translate('rootLayout.screens.freeTrialPreview.heading')}
          </Text>

          <Text className="text-base== mb-6 text-center font-semibold-nunito text-white">
            {translate('rootLayout.screens.freeTrialPreview.subheading')}
          </Text>
          <FadeInView delay={100}>
            <SocialProofCard />
          </FadeInView>
          <HorizontalLine className="mb-3 mt-4" />
          <PremiumFeaturesOverview />
        </ScrollView>
        {/* Bottom Navigation */}
        <View
          className={`mb-4 mt-auto flex-row  items-center justify-between px-6 `}
        >
          <View className={`${isVerySmallDevice ? 'gap-4' : 'gap-12'}`}>
            <Button
              onPress={onSkip}
              label={translate('general.skip')}
              className="bg-transparent active:opacity-60 dark:bg-transparent"
              textClassName="font-bold-nunito text-lg text-white dark:text-white"
            />
          </View>

          <Button
            onPress={() =>
              router.navigate({
                pathname: '/paywall-new',
                params: { allowAppAccess: true },
              })
            }
            icon={
              <ArrowRightSharp color={colors.white} width={20} height={20} />
            }
            label={translate('general.continue')}
            className=" h-[56px] w-[150px] rounded-xl border-2 border-white bg-primary-900  pl-5 dark:bg-primary-900"
            textClassName="text-lg font-semibold-nunito text-white dark:text-white"
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default FreeTrialPreview;
