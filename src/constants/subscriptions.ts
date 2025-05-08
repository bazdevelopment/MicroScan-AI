import { Platform } from 'react-native';

export const SUBSCRIPTIONS_PLANS_ANDROID = {
  MONTHLY: 'micro_scan_ai_1month_subscription:monthly-subscription',
  YEARLY: 'micro_scan_ai_1year_subscription:yearly-subscription',
};

export const SUBSCRIPTIONS_PLANS_IOS = {
  MONTHLY: 'micro_scan_ai_1month_subscription',
  YEARLY: 'micro_scan_ai_1year_subscription',
};

export const SUBSCRIPTION_PLANS_PER_PLATFORM = Platform.select({
  android: {
    MONTHLY: SUBSCRIPTIONS_PLANS_ANDROID.MONTHLY,
    YEARLY: SUBSCRIPTIONS_PLANS_ANDROID.YEARLY,
  },
  ios: {
    MONTHLY: SUBSCRIPTIONS_PLANS_IOS.MONTHLY,
    YEARLY: SUBSCRIPTIONS_PLANS_IOS.YEARLY,
  },
});
