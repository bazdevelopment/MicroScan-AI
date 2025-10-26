/* eslint-disable max-lines-per-function */
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { type CustomerInfo } from 'react-native-purchases';

import { queryClient } from '@/api';
import {
  useGetCustomerInfo,
  useGetOfferings,
  usePurchaseSubscription,
  useRestorePurchases,
} from '@/api/subscription/subscription.hooks';
import { useUpdateUser, useUser } from '@/api/user/user.hooks';
import Icon from '@/components/icon';
import { SUBSCRIPTION_PLANS_PER_PLATFORM } from '@/constants/subscriptions';
import { DEVICE_TYPE, translate, useIsFirstTime } from '@/core';
import { useCrashlytics } from '@/core/hooks/use-crashlytics';
import { type CrashlyticsLogLevel } from '@/crashlytics/crashlytics.types';
import { type IUserInfo } from '@/types/general-types';
import { Button, CheckboxIcon, colors, Image, Switch, Text } from '@/ui';
import { CloseIcon } from '@/ui/assets/icons';
import { CheckIcon } from '@/ui/assets/icons/check';

import { type IOnboardingCollectedData } from './onboarding';

const formatPaywallData = (offerings: any) => {
  if (!offerings) return [];

  const paywallData = [];

  if (offerings?.annual?.product) {
    paywallData.push({
      id: offerings.annual.product.identifier,
      title: translate(
        'rootLayout.screens.paywallUpgradeScreen.thirdOffering.title'
      ),
      subtitle: translate(
        'rootLayout.screens.paywallUpgradeScreen.thirdOffering.subtitle',
        {
          price: offerings.annual.product.priceString,
        }
      ),
      price: offerings.annual.product.priceString,
      priceNumber: offerings.annual.product.price,
      currency: offerings.annual.product.currencyCode,
      type: 'ANNUAL',
    });
  }
  //!We won't use monthly subscription plan
  // if (offerings?.monthly?.product) {
  //   paywallData.push({
  //     id: offerings.monthly.product.identifier,
  //     title: translate(
  //       'rootLayout.screens.paywallUpgradeScreen.secondOffering.title'
  //     ),
  //     subtitle: translate(
  //       'rootLayout.screens.paywallUpgradeScreen.secondOffering.subtitle',
  //       {
  //         price: offerings.monthly.product.priceString,
  //       }
  //     ),
  //     price: offerings.monthly.product.priceString,
  //     priceNumber: offerings.monthly.product.price,
  //     currency: offerings.monthly.product.currencyCode,
  //     type: 'MONTHLY',
  //   });
  // }

  if (offerings?.weekly?.product) {
    paywallData.push({
      id: offerings.weekly.product.identifier,
      title: translate(
        'rootLayout.screens.paywallUpgradeScreen.fourthOffering.title',
        { trialDays: 3 }
      ),
      subtitle: translate(
        'rootLayout.screens.paywallUpgradeScreen.fourthOffering.subtitle',
        {
          price: offerings.weekly.product.priceString,
        }
      ),
      price: offerings.weekly.product.priceString,
      priceNumber: offerings.weekly.product.price,
      currency: offerings.weekly.product.currencyCode,
      type: 'WEEKLY',
    });
  }

  return paywallData;
};

const FeatureRow = ({ icon, text }: { icon: string; text: string }) => (
  <View className="mb-3 flex-row items-center">
    <View className="mr-4 items-center justify-center rounded-full bg-blue-500 p-1">
      {/* <Ionicons name={icon as any} size={14} color="white" /> */}
      <CheckIcon color={colors.white} strokeWidth={3} width={14} height={14} />
    </View>
    <Text className="flex-1 font-semibold-nunito text-lg">{text}</Text>
  </View>
);

const PricingCard = ({
  title,
  subtitle,
  price,
  originalPrice,
  badge,
  isSelected,
  onPress,
  isFree = false,
}: {
  title: string;
  subtitle?: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  isSelected: boolean;
  onPress: () => void;
  isFree?: boolean;
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`rounded-xl border-2 px-4 py-3.5 ${
      isSelected
        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
        : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-black'
    }`}
    activeOpacity={0.7}
  >
    <View className="flex-row items-center justify-between">
      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="font-bold-nunito text-lg text-gray-900">
            {title}
          </Text>
          {badge && (
            <View className="ml-3 rounded-lg bg-red-500 px-3 py-1">
              <Text className="font-bold-nunito text-[13px] text-white">
                {badge}
              </Text>
            </View>
          )}
        </View>

        <View>
          {originalPrice && (
            <View className="mt-1 flex-row">
              <Text className="mr-2 font-semibold-nunito text-base text-gray-400 line-through">
                {originalPrice}
              </Text>
              <Text className="font-semibold-nunito text-base text-gray-900">
                {price} {translate('general.perYear')}
              </Text>
              {/* {isFree && (
                <View className="ml-3 rounded bg-green-500 px-2 py-1">
                  <Text className="text-xs font-bold text-white">FREE</Text>
                </View>
              )} */}
            </View>
          )}
          {isFree && (
            <View className="absolute -top-6 right-3 self-end rounded px-2 py-1">
              <Text className="font-extra-bold-nunito text-xl text-black">
                {translate('general.free')}
              </Text>
            </View>
          )}
        </View>

        {subtitle && (
          <Text className="text-md font-medium-nunito text-charcoal-900">
            {subtitle}
          </Text>
        )}
      </View>

      <View
        className={`size-6 rounded-full border-2 ${
          isSelected
            ? 'border-blue-500 bg-blue-500'
            : 'border-gray-300 bg-white dark:bg-black'
        } items-center justify-center`}
      >
        {isSelected && (
          <CheckIcon
            color={colors.white}
            strokeWidth={3}
            width={15}
            height={15}
          />
        )}
      </View>
    </View>
  </TouchableOpacity>
);

const PaywallNew = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { allowAppAccess = 'false' } = useLocalSearchParams();

  const { data: userInfo } = useUser(language);
  const YEAR_PLAN_DISCOUNT = 90;
  const { data: customerInfo } = useGetCustomerInfo();
  const [, setIsFirstTime] = useIsFirstTime();
  const scrollViewRef = React.useRef<ScrollView>(null);

  const { mutateAsync: onUpdateUser, isPending: isPendingUpdateUser } =
    useUpdateUser();
  const { logEvent } = useCrashlytics();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Initialize with yearly plan selected and free trial off
  const [selectedPlan, setSelectedPlan] = useState('weekly');
  const [freeTrialEnabled, setFreeTrialEnabled] = useState(
    selectedPlan === 'weekly'
  );

  // Handle switch toggle
  const handleSwitchToggle = (value: boolean) => {
    setFreeTrialEnabled(value);
    // Switch selected plan based on toggle
    setSelectedPlan(value ? 'weekly' : 'yearly');
    scrollViewRef?.current?.scrollToEnd({ animated: true });
  };

  // Manual plan selection (when user taps on cards)
  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan);
    // Update switch to match selected plan
    setFreeTrialEnabled(plan === 'weekly');
    scrollViewRef?.current?.scrollToEnd({ animated: true });
  };

  const onSuccessRestoration = async (fieldsToUpdate: object) => {
    await onUpdateUser({ language, userId: userInfo.userId, fieldsToUpdate });
  };

  const { mutateAsync: purchaseSubscription } = usePurchaseSubscription();
  const { data: offerings } = useGetOfferings();
  const formattedOfferings = formatPaywallData(offerings);
  const annualOffering = formattedOfferings?.find(
    (offering) => offering.type === 'ANNUAL'
  );
  const monthlyOffering = formattedOfferings?.find(
    (offering) => offering.type === 'MONTHLY'
  );

  const weeklyOffering = formattedOfferings?.find(
    (offering) => offering.type === 'WEEKLY'
  );

  const { mutate: restorePurchase, isPending: isPendingRestorePurchase } =
    useRestorePurchases(onSuccessRestoration);

  const features = [
    {
      title: translate(
        'rootLayout.screens.paywallOnboarding.freeTierOfferings.firstOffering'
      ),
      icon: <CheckboxIcon />,
    },
    {
      title: translate(
        'rootLayout.screens.paywallOnboarding.freeTierOfferings.thirdOffering'
      ),
      icon: <CheckboxIcon />,
    },
    {
      title: translate(
        'rootLayout.screens.paywallOnboarding.freeTierOfferings.fourthOffering'
      ),
      icon: <CheckboxIcon />,
    },
    {
      title: translate(
        'rootLayout.screens.paywallOnboarding.freeTierOfferings.secondOffering'
      ),
      icon: <CheckboxIcon />,
    },
  ];
  const handlePurchase = async () => {
    const packageIdentifier =
      selectedPlan === 'yearly'
        ? SUBSCRIPTION_PLANS_PER_PLATFORM?.YEARLY
        : selectedPlan === 'monthly'
          ? SUBSCRIPTION_PLANS_PER_PLATFORM?.MONTHLY
          : SUBSCRIPTION_PLANS_PER_PLATFORM?.WEEKLY;

    const customerInfoAfterPurchase = await purchaseSubscription({
      packageIdentifier,
    });

    if (customerInfoAfterPurchase) {
      updateUserAndNavigate({
        userId: userInfo.userId,
        language,
        collectedData: {},
        customerInfo: customerInfo as CustomerInfo,
        onUpdateUser,
        logEvent,
        setIsFirstTime,
        allowAppAccess,
      });
      DEVICE_TYPE.IOS && router.dismiss();
      // requestAppRatingWithDelay(3000); //!!!remove from now asking the review
    }
  };

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <SafeAreaView className="flex-1">
        {/* <FocusAwareStatusBar hidden /> */}

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
        >
          {/* Header */}

          <Icon
            size={28}
            containerStyle={`right-4 self-end p-2 z-10 ${DEVICE_TYPE.ANDROID ? 'top-10' : 'top-2'}`}
            onPress={() => {
              if (allowAppAccess === 'true') {
                updateUserAndNavigate({
                  userId: userInfo.userId,
                  language,
                  collectedData: {},
                  customerInfo: customerInfo as CustomerInfo,
                  onUpdateUser,
                  logEvent,
                  setIsFirstTime,
                });
                // requestAppRatingWithDelay(3000);
                DEVICE_TYPE.IOS && router.dismiss();
                return;
              }

              router.back();
            }}
            icon={
              <CloseIcon
                strokeWidth={1.85}
                color={isDark ? colors.charcoal[600] : colors.charcoal[300]}
              />
            }
          />

          {/* Content Container */}
          <View className={`px-6 ${DEVICE_TYPE.ANDROID ? 'mt-2' : '-mt-6'}`}>
            {/* Fish Icon */}
            <View className="mb-4 items-center">
              <Image
                contentFit="contain"
                source={require('../ui/assets/images/paywall-microscope-5.png')}
                style={{
                  width: 110,
                  height: 110,
                }}
              />
            </View>

            {/* Title */}
            <Text className="mb-6 text-center font-extra-bold-nunito text-3xl text-gray-900">
              {translate(
                'rootLayout.screens.paywallOnboarding.freeTierOfferings.heading'
              )}
            </Text>

            {/* Features */}
            <View className="mb-8 w-[90%] items-center justify-center self-center">
              {features.map((feature, idx) => (
                <FeatureRow key={idx} icon="checkmark" text={feature.title} />
              ))}
            </View>

            {/* Pricing Options */}
            <View className="gap-3">
              {annualOffering && (
                <PricingCard
                  title={annualOffering.title}
                  price={annualOffering.price}
                  originalPrice={`${calculateOriginalPrice(annualOffering.priceNumber, YEAR_PLAN_DISCOUNT)} ${annualOffering.currency}`}
                  badge={`${translate('general.saveDiscount')} ${YEAR_PLAN_DISCOUNT}%`}
                  isSelected={selectedPlan === 'yearly'}
                  onPress={() => handlePlanSelection('yearly')}
                />
              )}
              {monthlyOffering && (
                <PricingCard
                  title={monthlyOffering.title}
                  subtitle={`${monthlyOffering.price} ${translate('general.perMonth')}`}
                  price=""
                  isSelected={selectedPlan === 'monthly'}
                  onPress={() => handlePlanSelection('monthly')}
                  isFree={false}
                />
              )}
              {weeklyOffering && (
                <PricingCard
                  title={weeklyOffering.title}
                  subtitle={`${translate('general.then')} ${weeklyOffering.price} ${translate('general.perWeek')}`}
                  price=""
                  isSelected={selectedPlan === 'weekly'}
                  onPress={() => handlePlanSelection('weekly')}
                  isFree={true}
                />
              )}
            </View>

            {/* Free Trial Toggle */}
            <View className="mb-10 mt-3 flex-row items-center justify-between rounded-2xl bg-gray-100 p-4 dark:bg-charcoal-800">
              <Text className="font-bold-nunito text-lg text-gray-900">
                {translate(
                  'rootLayout.screens.paywallOnboarding.freeTierOfferings.freeTrialEnabled'
                )}
              </Text>
              <Switch
                checked={freeTrialEnabled}
                onChange={handleSwitchToggle}
                accessibilityLabel="switch-paywall"
              />
            </View>

            {/* Try for Free Button */}
            <TouchableOpacity
              onPress={handlePurchase}
              className="mb-2 h-14 items-center justify-center rounded-xl bg-blue-500 shadow-lg"
              activeOpacity={0.8}
              disabled={isPendingUpdateUser}
            >
              <View className="flex-row items-center">
                <Text className="mr-2 font-bold-nunito text-xl text-white">
                  {freeTrialEnabled
                    ? translate('general.tryForFree')
                    : translate('general.unlockNow')}
                </Text>
                <Ionicons name="chevron-forward" size={24} color="white" />
              </View>
            </TouchableOpacity>

            {/* Footer Links */}
            <View className="items-center">
              <View className="flex-row flex-wrap items-center justify-center">
                <Button
                  label={translate('general.restorePurchase')}
                  variant="ghost"
                  className="self-center active:opacity-70"
                  textClassName="text-black dark:text-white font-semibold-nunito"
                  onPress={restorePurchase}
                  loading={isPendingRestorePurchase}
                />

                {/* <Text className="mx-4 text-base text-gray-400">•</Text>

                <TouchableOpacity activeOpacity={0.7}>
                  <Text className="text-base font-medium-nunito text-gray-600 underline">
                    Terms of Use
                  </Text>
                </TouchableOpacity>
                <Text className="mx-4 text-base text-gray-400">•</Text>

                <TouchableOpacity activeOpacity={0.7}>
                  <Text className="text-base font-medium-nunito text-gray-600 underline">
                    Privacy Policy
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PaywallNew;

export const updateUserAndNavigate = async ({
  userId,
  language,
  collectedData,
  customerInfo,
  onUpdateUser,
  logEvent,
  setIsFirstTime,
  allowAppAccess,
}: {
  allowAppAccess: string;
  userId: string;
  language: string;
  collectedData: IOnboardingCollectedData;
  customerInfo: CustomerInfo;
  setIsFirstTime: (value: boolean) => void;
  logEvent: (message: string, level?: CrashlyticsLogLevel) => Promise<void>;
  onUpdateUser: ({
    language,
    userId,
    fieldsToUpdate,
  }: {
    language: string;
    userId: string;
    fieldsToUpdate: object;
  }) => Promise<void>;
}) => {
  await updateUserAfterSelectingPlan({
    language,
    userId,
    collectedData,
    customerInfo,
    onUpdateUser,
  })
    .then(() => {
      queryClient.setQueryData(['user-info'], (oldData: IUserInfo) => ({
        ...oldData,
        isOnboarded: true,
        isFreeTrialOngoing: false,
      }));

      queryClient.invalidateQueries({ queryKey: ['user-info'] });

      if (allowAppAccess === 'false') {
        router.back();
      } else {
        router.navigate('/(tabs)');
      }
      setIsFirstTime(false);
      logEvent(
        `User ${userId} has been onboarded successfully and selected ${collectedData.selectedPackage} plan and is redirected to home screen`
      );
    })
    .catch((e) => {
      console.log('error', e);
      // !updateUserAfterSelectingPlan will throw an error if the google modal for subscription is shown and the user close the modal (without paying)
    });
};

export const updateUserAfterSelectingPlan = async ({
  language,
  userId,
  collectedData,
  customerInfo,
  onUpdateUser,
}: {
  language: string;
  userId: string;
  collectedData: { preferredName: string };
  customerInfo: CustomerInfo;
  onUpdateUser: ({
    language,
    userId,
    fieldsToUpdate,
  }: {
    language: string;
    userId: string;
    fieldsToUpdate: object;
  }) => Promise<void>;
}) => {
  const fieldsToUpdate: Partial<IUserInfo> = {
    isOnboarded: true,
    ...(collectedData.preferredName && {
      userName: collectedData.preferredName,
    }),
    isFreeTrialOngoing: !!customerInfo?.activeSubscriptions?.length
      ? false
      : true,
    ...(customerInfo && {
      activeSubscriptionsRevenue: customerInfo.activeSubscriptions,
      allExpirationDatesRevenue: customerInfo.allExpirationDates,
      allPurchaseDatesRevenue: customerInfo.allPurchaseDates,
      allPurchasedProductIdentifiersRevenue:
        customerInfo.allPurchasedProductIdentifiers,
      firstSeenRevenue: customerInfo.firstSeen,
    }),
  };

  // Guard clause to ensure onUpdateUser is a function
  // If onUpdateUser is undefined, return a resolved Promise
  if (typeof onUpdateUser !== 'function') {
    console.error('onUpdateUser is not a function');
    return Promise.resolve(); // Resolved Promise to ensure .then() is called
  }

  // Otherwise, call onUpdateUser and return its Promise
  return onUpdateUser({
    language,
    userId,
    fieldsToUpdate,
  });
};

function calculateOriginalPrice(
  reducedPrice: number,
  discountPercentage: number
) {
  // Convert discount percentage to a decimal (e.g., 90% = 0.9, 60% = 0.6)
  const remainingPercentage = 1 - discountPercentage / 100;

  // Calculate the original price
  return (reducedPrice / remainingPercentage).toFixed(2);
}
