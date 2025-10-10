import React from 'react';
import { View } from 'react-native';

import { translate } from '@/core';
import getDeviceSizeCategory from '@/core/utilities/get-device-size-category';
import { colors, Text } from '@/ui';
import MicroscopeIcon from '@/ui/assets/icons/microscope-icon';
import { PremiumBadge } from '@/ui/assets/icons/premium-badge';
import { NoAdsIllustration } from '@/ui/assets/illustrations';
import { DoctorsIllustration } from '@/ui/assets/illustrations/doctors';

import FadeInView from '../fade-in-view/fade-in-view';

// Feature Card Component
const FeatureCard = ({ icon, title }) => (
  <View className="mb-4 flex-row items-center rounded-2xl bg-white/95 p-4 shadow-sm dark:bg-primary-900/20">
    <View className="mr-4 size-14 items-center justify-center rounded-full bg-yellow-400">
      {icon}
    </View>
    <View className="flex-1">
      <Text className="mb-1 font-semibold-nunito text-base text-gray-900">
        {title}
      </Text>
    </View>
  </View>
);

const PremiumFeaturesOverview = () => {
  const { isVerySmallDevice } = getDeviceSizeCategory();

  const features = [
    {
      icon: <PremiumBadge width={40} height={40} fill={colors.primary[900]} />,
      text: translate('components.PremiumFeaturesOverview.second'),
      backgroundColor: 'bg-yellow-100',
      rotation: '-rotate-2' as const,
    },
    {
      icon: <MicroscopeIcon width={35} height={35} />,
      text: translate('components.PremiumFeaturesOverview.first', {
        trialDays: 3,
      }),
      backgroundColor: 'bg-blue-100',
      rotation: 'rotate-2' as const,
    },
    {
      icon: (
        <DoctorsIllustration
          fill={colors.neutral[500]}
          width={42}
          height={42}
        />
      ),
      text: 'Unlimited chats with a 24/7 medical AI assistants',
      backgroundColor: 'bg-blue-100',
      rotation: 'rotate-2' as const,
    },
    {
      icon: <NoAdsIllustration width={42} height={42} />,
      text: translate('components.PremiumFeaturesOverview.third'),
      backgroundColor: 'bg-red-100',
      rotation: 'rotate-2' as const,
    },
  ];

  return (
    <View className={`mt-2 flex-1 justify-center gap-2 `}>
      {features.map((feature, index) => (
        <FadeInView key={index} delay={index * 150}>
          <FeatureCard
            icon={feature.icon}
            title={feature.text}
            isVerySmallDevice={isVerySmallDevice}
          />
        </FadeInView>
      ))}
    </View>
  );
};

export default PremiumFeaturesOverview;
