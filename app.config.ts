/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config';
import type { AppIconBadgeConfig } from 'app-icon-badge/types';

import { ClientEnv, Env } from './env';

const appIconBadgeConfig: AppIconBadgeConfig = {
  enabled: Env.APP_ENV !== 'production',
  badges: [
    {
      text: Env.APP_ENV,
      type: 'banner',
      color: 'white',
    },
    {
      text: Env.VERSION.toString(),
      type: 'ribbon',
      color: 'white',
    },
  ],
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  slug: Env.SLUG,
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  androidStatusBar: {
    barStyle: 'light-content',
    backgroundColor: '#060047',
    translucent: true,
  },
  splash: {
    image: './assets/splash_512.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    googleServicesFile: ClientEnv.GOOGLE_SERVICES_PLIST_PATH,
    config: {
      usesNonExemptEncryption: false, // Avoid the export compliance warning on the app store
    },
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
      CFBundleLocalizations: [
        'en', // English
        'zh', // Chinese
        'es', // Spanish
        'hi', // Hindi
        'ar', // Arabic
        'pt', // Portuguese
        'ru', // Russian
        'ja', // Japanese
        'ko', // Korean
        'de', // German
        'fr', // French
        'ro', // Romanian
      ],
      CFBundleDevelopmentRegion: 'en', // Default language, adjust if needed
    },
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    googleServicesFile: ClientEnv.GOOGLE_SERVICES_JSON_PATH,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    blockedPermissions: ['FOREGROUND_SERVICE_MEDIA_PLAYBACK'], // Android review didn't pass (permission used by expo-av)You
    package: Env.PACKAGE,
  },

  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-notifications',
      {
        icon: './assets/icon_notification_96x96.png',
        color: '#4568c9',
        defaultChannel: 'default',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission:
          'Allow $(PRODUCT_NAME) to access your photo library to upload media for AI analysis, providing insights and feedback for informational purposes.',
        cameraPermission:
          'Allow $(PRODUCT_NAME) to access your camera to capture images for AI-powered analysis, providing insights and feedback for informational purposes.',
        //'Disables the microphone permission',
        microphonePermission: false,
      },
    ],
    [
      'expo-document-picker',
      {
        iCloudContainerEnvironment: 'Production',
      },
    ],
    // [
    //   'expo-splash-screen',
    //   {
    //     backgroundColor: '#FFFFFF',
    //     image: './assets/splash-icon.png',
    //     imageWidth: 150,
    //   },
    // ],
    [
      'expo-quick-actions',
      {
        androidIcons: {
          heart_icon: {
            foregroundImage: './assets/heart-icon-android.png',
            backgroundColor: '#FFFFFF',
          },
        },
        iosIcons: {
          heart_icon: './assets/heart-icon-ios.png',
        },
      },
    ],
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 35,
          targetSdkVersion: 35,
          buildToolsVersion: '35.0.0',
          kotlinVersion: '1.9.25',
        },
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
    [
      'expo-font',
      {
        fonts: ['./assets/fonts/Inter.ttf'],
      },
    ],
    'expo-localization',
    'expo-router',
    '@react-native-firebase/app',
    '@react-native-firebase/auth',
    '@react-native-firebase/crashlytics',
    ['app-icon-badge', appIconBadgeConfig],
    ['react-native-edge-to-edge'],
    ['./with-app-theme', 'Theme.EdgeToEdge'], //to avoid dupicate AppTheme in styles.xml
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
});
