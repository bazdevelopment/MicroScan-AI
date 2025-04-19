import { router } from 'expo-router';
import { firebaseAuth, firebaseCloudFunctionsInstance } from 'firebase/config';

import Toast from '@/components/toast';
import { translate } from '@/core';

import { queryClient } from '../common';

/** Create anonymous account */
export const createAnonymousAccount = async ({
  username,
  language,
  actualUserId,
}: {
  username: string;
  language: string;
  actualUserId: string;
}) => {
  try {
    const { data }: { data: any } =
      await firebaseCloudFunctionsInstance.httpsCallable(
        'loginUserAnonymously',
      )({
        username,
        language,
        actualUserId,
      });

    // await firebaseAuth.signInAnonymously();

    const userCredentials = await firebaseAuth.signInWithCustomToken(
      data.authToken,
    );

    return { ...userCredentials, ...data };
  } catch (error) {
    throw error;
  }
};

/** Create anonymous account */
export const loginWithEmail = async ({
  email,
  language,
}: {
  email: string;
  language: string;
}) => {
  try {
    const { data }: { data: any } =
      await firebaseCloudFunctionsInstance.httpsCallable('loginUserViaEmail')({
        email,
        language,
      });
    const userCredentials = await firebaseAuth.signInWithCustomToken(
      data.authToken,
    );
    return userCredentials;
  } catch (error) {
    throw error;
  }
};

export const sendOtpCodeViaEmail = async ({
  email,
  language,
}: {
  email: string;
  language: string;
}) => {
  try {
    const sendEmailVerificationLink =
      firebaseCloudFunctionsInstance.httpsCallable(
        'sendVerificationCodeViaEmail',
      );
    const { data } = await sendEmailVerificationLink({
      email,
      language,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const validateVerificationCode = async ({
  authenticationCode,
  email,
  language,
}: {
  authenticationCode: string;
  email: string;
  language: string;
}) => {
  try {
    const verifyAuthenticationCode =
      firebaseCloudFunctionsInstance.httpsCallable('verifyAuthenticationCode');
    const { data } = await verifyAuthenticationCode({
      authenticationCode,
      email,
      language,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const decrementNumberOfScans = async ({
  language,
}: {
  language: string;
}) => {
  try {
    const handleDecrementScans =
      firebaseCloudFunctionsInstance.httpsCallable('decrementUserScans');
    const { data } = await handleDecrementScans({ language });

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserPreferredLanguage = async ({
  language,
}: {
  language: string;
}) => {
  try {
    const onUpdateLanguage = firebaseCloudFunctionsInstance.httpsCallable(
      'updatePreferredLanguage',
    );
    const { data } = await onUpdateLanguage({ language });

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserInfo = async ({
  language,
  userId,
  fieldsToUpdate,
}: {
  language: string;
  userId: string;
  fieldsToUpdate: object;
}) => {
  try {
    const onUpdateUserInfo =
      firebaseCloudFunctionsInstance.httpsCallable('updateUser');
    const { data } = await onUpdateUserInfo({
      userId,
      language,
      fieldsToUpdate,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

/** Get user info  */
export const getUserInfo = async ({ language }: { language: string }) => {
  try {
    const { data } = await firebaseCloudFunctionsInstance.httpsCallable(
      'getUserInfo',
    )({ language });
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  await firebaseAuth.signOut();
  // router.navigate('/login');
  router.navigate('/anonymous-login');
  queryClient.clear(); // Clears all cached queries & mutations
  Toast.success(translate('alerts.loggedOutSuccess'));
};
