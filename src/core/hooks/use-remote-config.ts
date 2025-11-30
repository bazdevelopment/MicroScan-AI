import remoteConfig from '@react-native-firebase/remote-config';
import { useCallback, useEffect, useState } from 'react';

import { DEFAULT_PROMPT } from '@/constants/default-prompt';
import {
  BLURRING_CONTENT_CONVERSATIONS_LIMIT_BACKUP,
  MAX_CONVERSATIONS_ALLOWED_FREE_TRIAL_BACKUP,
  MAX_SCANS_ALLOWED_FREE_TRIAL_BACKUP,
} from '@/constants/limits';

const DEFAULT_CONFIGS = {
  MINIMUM_VERSION_ALLOWED: '1.0.0',
  SHOW_FAQ_SCREEN: false,
  SHOW_RATE_SCREEN: false,
  SHOW_ADMIN_SCREENS: false,
  AI_ANALYSIS_PROMPT_FIREBASE: DEFAULT_PROMPT,
  MAX_IMAGES_SELECTION_LIMIT: 8,
  ENABLE_SEND_MESSAGES_FUNCTION_BACKUP: false,
  BLURRING_CONTENT_CONVERSATIONS_LIMIT:
    BLURRING_CONTENT_CONVERSATIONS_LIMIT_BACKUP,
  MAX_CONVERSATIONS_ALLOWED_FREE_TRIAL:
    MAX_CONVERSATIONS_ALLOWED_FREE_TRIAL_BACKUP,
  MAX_SCANS_ALLOWED_FREE_TRIAL: MAX_SCANS_ALLOWED_FREE_TRIAL_BACKUP,
};

//2. Infer the type automatically from the default object
type RemoteConfigType = typeof DEFAULT_CONFIGS;

const useRemoteConfig = (): RemoteConfigType => {
  // 3. Initialize state with DEFAULT_CONFIGS immediately
  const [configs, setConfigs] = useState<RemoteConfigType>(DEFAULT_CONFIGS);
  const parseConfigValue = (value: string) => {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;

    const numberValue = Number(value);
    if (!isNaN(numberValue)) return numberValue;

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  // Helper function to get all config values
  const getParsedConfigs = useCallback(() => {
    const allConfigs = remoteConfig().getAll();

    // Transform to simple key-value object
    const parsedEntries = Object.entries(allConfigs).map(([key, value]) => {
      const stringValue = value.asString();
      return [key, parseConfigValue(stringValue)];
    });

    // Merge parsed values over the defaults to ensure type safety and completeness
    return {
      ...DEFAULT_CONFIGS,
      ...Object.fromEntries(parsedEntries),
    };
  }, []);

  useEffect(() => {
    const initRemoteConfig = async () => {
      try {
        // 4. Register defaults with Firebase SDK (crucial for caching/offline)
        // await remoteConfig().setDefaults(DEFAULT_CONFIGS);

        await remoteConfig().setConfigSettings({
          minimumFetchIntervalMillis: 0, // Dev only (remove or increase for prod)
        });

        // 5. Fetch and activate
        const fetched = await remoteConfig().fetchAndActivate();

        // Only update state if we actually fetched new configs or if it's the first load
        if (fetched) {
          setConfigs(getParsedConfigs());
        } else {
          // Even if nothing new was fetched, ensure we have the latest active values
          setConfigs(getParsedConfigs());
        }
      } catch (error) {
        console.log('Remote Config init failed', error);
        // Fallback is already handled because state initialized with defaults
      }
    };

    initRemoteConfig();

    // Set up real-time listener
    const unsubscribe = remoteConfig().onConfigUpdated(async (event, error) => {
      if (!error) {
        await remoteConfig().activate();
        setConfigs(getParsedConfigs());
      }
    });

    return () => unsubscribe();
  }, [getParsedConfigs]);

  return configs;
};

export default useRemoteConfig;
