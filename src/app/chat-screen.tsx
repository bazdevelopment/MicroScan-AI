/* eslint-disable max-lines-per-function */
/* eslint-disable react-hooks/exhaustive-deps */
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from '@react-native-community/blur';
import { FlashList } from '@shopify/flash-list';
import { router, useLocalSearchParams } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Animated,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Markdown from 'react-native-markdown-display';
import { Toaster } from 'sonner-native';
import { twMerge } from 'tailwind-merge';

import {
  useAllUserConversations,
  useConversation,
  useConversationHistory,
} from '@/api/conversation/conversation.hooks';
import { useUser } from '@/api/user/user.hooks';
import AnimatedChatQuestions from '@/components/animated-questions';
import AttachmentPreview from '@/components/attachment-preview';
import BounceLoader from '@/components/bounce-loader';
import Branding from '@/components/branding';
import CustomAlert from '@/components/custom-alert';
import Icon from '@/components/icon';
import Toast from '@/components/toast';
import { AI_ANALYSIS_LANGUAGE_SELECTION } from '@/constants/language';
import {
  BLURRING_CONTENT_CONVERSATIONS_LIMIT,
  MAX_CONVERSATIONS_ALLOWED_FREE_TRIAL,
} from '@/constants/limits';
import { LOADING_MESSAGES_CHATBOT } from '@/constants/loading-messages';
import { DEVICE_TYPE, translate, useSelectedLanguage } from '@/core';
import useBackHandler from '@/core/hooks/use-back-handler';
import { useClipboard } from '@/core/hooks/use-clipboard';
import { useTextToSpeech } from '@/core/hooks/use-text-to-speech';
import { getStorageItem } from '@/core/storage';
import { checkIsVideo } from '@/core/utilities/check-is-video';
import { generateUniqueId } from '@/core/utilities/generate-unique-id';
import { requestAppRatingWithDelay } from '@/core/utilities/request-app-review';
import { shuffleArray } from '@/core/utilities/shuffle-array';
import { wait } from '@/core/utilities/wait';
import { colors, SafeAreaView, Text } from '@/ui';
import { Camera, CloseIcon, SoundOn, StopIcon } from '@/ui/assets/icons';
import { CopiedIcon } from '@/ui/assets/icons/copied';
import CopyIcon from '@/ui/assets/icons/copy';
import { LockerIcon } from '@/ui/assets/icons/locker';

type MessageType = {
  role: string;
  content: string;
  isPending?: boolean;
  isError?: boolean;
};

const RANDOM_QUESTIONS = [
  translate('rootLayout.screens.chatScreen.randomQuestions.one'),
  translate('rootLayout.screens.chatScreen.randomQuestions.two'),
  translate('rootLayout.screens.chatScreen.randomQuestions.three'),
  translate('rootLayout.screens.chatScreen.randomQuestions.four'),
  translate('rootLayout.screens.chatScreen.randomQuestions.five'),
  translate('rootLayout.screens.chatScreen.randomQuestions.six'),
  translate('rootLayout.screens.chatScreen.randomQuestions.seven'),
  translate('rootLayout.screens.chatScreen.randomQuestions.eight'),
  translate('rootLayout.screens.chatScreen.randomQuestions.nine'),
  translate('rootLayout.screens.chatScreen.randomQuestions.ten'),
  translate('rootLayout.screens.chatScreen.randomQuestions.eleven'),
  translate('rootLayout.screens.chatScreen.randomQuestions.twelve'),
  translate('rootLayout.screens.chatScreen.randomQuestions.thirteen'),
  translate('rootLayout.screens.chatScreen.randomQuestions.fourteen'),
  translate('rootLayout.screens.chatScreen.randomQuestions.fifteen'),
];

const BlurredMessageOverlay = ({
  onUnlock,
  isDark,
}: {
  onUnlock: () => void;
  isDark: boolean;
}) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Gentle pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 1100,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1100,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <TouchableOpacity
      className="absolute inset-0 top-[30%] items-center justify-center rounded-2xl"
      onPress={onUnlock}
      activeOpacity={1}
    >
      {DEVICE_TYPE.IOS ? (
        <BlurView
          blurAmount={2}
          blurType={isDark ? 'dark' : 'light'}
          style={[StyleSheet.absoluteFill]}
        />
      ) : (
        <View className="absolute inset-0 bg-slate-100/95 dark:bg-blackBeauty/95" />
      )}
      <TouchableOpacity
        onPress={onUnlock}
        className="items-center justify-center"
        activeOpacity={0.7}
      >
        <View className="rounded-full border-2 border-charcoal-300 p-[3px] dark:border-charcoal-500 dark:bg-charcoal-800">
          <Animated.View
            style={{
              transform: [{ scale: pulseAnim }],
            }}
            className="border-1 items-center justify-center rounded-full border-charcoal-700 bg-[#2196F3] p-4 shadow-lg"
          >
            <LockerIcon width={22} height={22} fill={colors.white} />
          </Animated.View>
        </View>

        <Text className="mt-2 rounded-full bg-white p-2 text-center font-bold-nunito text-base text-gray-800 dark:bg-blackEerie dark:text-white">
          {translate('general.unlockNow')} 🔓
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export const ChatBubble = ({
  message,
  isUser,
  onRetrySendMessage,
  speak,
  isSpeaking,
  shouldBlur = false,
  onUnlock,
}: {
  message: MessageType;
  isUser: boolean;
  onRetrySendMessage: () => void;
  speak: (text: string) => void;
  isSpeaking: boolean;
  shouldBlur?: boolean;
  onUnlock?: () => void;
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { copyToClipboard, copiedText } = useClipboard();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const { lightStyles, darkStyles } = getChatMessagesStyles(
    message,
    isUser,
    colors
  );

  return (
    <>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        }}
        className={twMerge(
          'py-3 my-1 rounded-2xl flex-row items-end relative',
          isUser
            ? 'px-4 bg-primary-900 dark:bg-primary-900 self-end rounded-tr-none'
            : 'pr-1 bg-slate-100 dark:bg-black self-start rounded-tl-none mr-[30]',
          message.isError && 'bg-red-100'
        )}
      >
        {!isUser && (
          <Image
            source={require('../ui/assets/images/doctor-microscopy.png')}
            className="mr-2 size-8 self-start rounded-full"
          />
        )}

        <View className="flex-1">
          <Markdown style={isDark ? darkStyles : lightStyles}>
            {message.content}
          </Markdown>
        </View>

        {message.isPending && !isUser && <TypingIndicator />}

        {/* Blur Overlay - only visible for specific message */}
        {shouldBlur && !isUser && onUnlock && (
          <BlurredMessageOverlay onUnlock={onUnlock} isDark={isDark} />
        )}
      </Animated.View>

      {/* Only show actions if not blurred */}
      {!shouldBlur && (
        <View className="item-center mt-1 flex-row gap-4">
          {!isUser && (
            <TouchableOpacity
              className="rounded-full p-1"
              onPress={() => copyToClipboard(message.content)}
            >
              {!!copiedText ? (
                <CopiedIcon
                  width={20}
                  height={20}
                  color={colors.primary[900]}
                />
              ) : (
                <CopyIcon width={20} height={20} color={colors.primary[900]} />
              )}
            </TouchableOpacity>
          )}

          {!isUser && !!speak && (
            <View className="h-9">
              {isSpeaking ? (
                <TouchableOpacity onPress={() => speak(message.content)}>
                  <StopIcon
                    width={22}
                    height={22}
                    top={3}
                    color={colors.primary[900]}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => speak(message.content)}>
                  <SoundOn width={20} height={20} top={3} />
                </TouchableOpacity>
              )}
            </View>
          )}
          {isSpeaking && !isUser && (
            <LottieView
              source={require('assets/lottie/speaking-animation.json')}
              autoPlay
              loop
              style={{ width: 30, height: 30 }}
            />
          )}

          {message.isError && (
            <TouchableOpacity
              className="ml-2 flex-1 flex-row justify-end  gap-1"
              onPress={onRetrySendMessage}
            >
              <Text className="mt-1 text-xs text-red-500">
                {translate('general.tryAgain')}
              </Text>
              <Ionicons name="refresh-circle" size={24} color="#EF4444" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );
};

let globalHasRequested = false;

export function useRequestAppRatingOnce({
  isLoading,
  isFetchingAllConversationsPending,
  userInfo,
  requestAppRatingWithDelay,
}: {
  isLoading: boolean;
  isFetchingAllConversationsPending: boolean;
  userInfo?: { completedScans?: number };
  requestAppRatingWithDelay: (delay: number) => void;
}) {
  const hasRequestedRef = useRef(globalHasRequested);

  useEffect(() => {
    if (hasRequestedRef.current || globalHasRequested) return;

    if (
      !isLoading &&
      !isFetchingAllConversationsPending &&
      userInfo?.completedScans === 1
    ) {
      hasRequestedRef.current = true;
      globalHasRequested = true;
      requestAppRatingWithDelay(1000);
    }
  }, [
    isLoading,
    isFetchingAllConversationsPending,
    userInfo?.completedScans,
    requestAppRatingWithDelay,
  ]);
}

export const TypingIndicator = () => {
  return (
    <LottieView
      source={require('assets/lottie/typing-loader-animation.json')}
      autoPlay
      loop
      style={{ width: 80, height: 80, marginLeft: -15, top: -25 }}
    />
  );
};

const ChatScreen = () => {
  const {
    conversationId = generateUniqueId(),
    mediaSource,
    mimeType,
    conversationMode,
  } = useLocalSearchParams();
  const [userMessage, setUserMessage] = useState('');
  const [pendingMessages, setPendingMessages] = useState<MessageType[]>([]);
  const [currentlySpeakingId, setCurrentlySpeakingId] = useState<string | null>(
    null
  );
  const { language: appLanguage } = useSelectedLanguage();
  const languageAIResponsesLocally = getStorageItem(
    AI_ANALYSIS_LANGUAGE_SELECTION
  );

  const selectedLanguage = languageAIResponsesLocally || appLanguage;

  const [lastUserMessageIndex, setLastUserMessageIndex] = useState<
    number | null
  >(null);
  const isVideo = checkIsVideo(mimeType as string);

  const flashListRef = useRef<FlashList<MessageType>>(null);

  const {
    speak,
    stop: stopSpeaking,
    isSpeaking,
  } = useTextToSpeech({
    preferredGender: 'female',
  });

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [randomQuestions, setRandomQuestions] = useState<string[]>([]);

  const {
    i18n: { language },
  } = useTranslation();
  const { data: userInfo } = useUser(language);

  const { data: conversation, isLoading } = useConversationHistory(
    conversationId as string
  );

  const { data, isPending: isFetchingAllConversationsPending } =
    useAllUserConversations();
  const conversationsCount = data?.count || 0;

  const { sendMessage, isSending } = useConversation(conversationId as string);

  const handleSpeak = (messageId: string, text: string) => {
    if (currentlySpeakingId === messageId) {
      setCurrentlySpeakingId(null);
      speak(text);
      wait(50).then(() => stopSpeaking()); //hack to be able to stop the speech when navigating throught different messages
    } else {
      setCurrentlySpeakingId(messageId);
      stopSpeaking();
      speak(text);
    }
  };

  const handleSendMessage = async (userMsg) => {
    if (!userMsg.trim()) return;
    setUserMessage('');
    Keyboard.dismiss();

    // Add the message to pending messages
    const newMessage: MessageType = {
      role: 'user',
      content: userMsg,
      isPending: true,
    };
    setPendingMessages((prev) => [...prev, newMessage]);

    // Store the index of the user's message
    setLastUserMessageIndex(messages.length);

    try {
      await sendMessage({
        userMessage: userMsg,
        conversationId: conversationId as string,
        conversationMode,
        userId: userInfo.userId,
        language: selectedLanguage,
      });
      // Remove the pending message and add it to the conversation
      setPendingMessages((prev) =>
        prev.filter((msg) => msg.content !== newMessage.content)
      );
    } catch (error) {
      console.error('Error sending message:', error);
      // Mark the message as failed
      setPendingMessages((prev) =>
        prev.map((msg) =>
          msg.content === newMessage.content
            ? { ...msg, isPending: false, isError: true }
            : msg
        )
      );
    }
  };

  const handleRetryMessage = async (message: MessageType) => {
    try {
      // Mark the message as pending again
      setPendingMessages((prev) =>
        prev.map((msg) =>
          msg.content === message.content
            ? { ...msg, isPending: true, isError: false }
            : msg
        )
      );

      await sendMessage({
        userMessage: message.content,
        conversationId: conversationId as string,
        conversationMode,
        userId: userInfo.userId,
        language: selectedLanguage,
      });

      // Remove the pending message and add it to the conversation
      setPendingMessages((prev) =>
        prev.filter((msg) => msg.content !== message.content)
      );
    } catch (error) {
      console.error('Error retrying message:', error);
      // Mark the message as failed again
      setPendingMessages((prev) =>
        prev.map((msg) =>
          msg.content === message.content
            ? { ...msg, isPending: false, isError: true }
            : msg
        )
      );
    }
  };

  const handleUnlockMessage = () => {
    router.navigate('/paywall-new');
  };

  // Combine conversation messages and pending messages
  interface ConversationMessage {
    role: string;
    content: string;
  }
  const messages: MessageType[] = useMemo(
    () => [
      ...(conversation?.messages?.filter(
        (msg: ConversationMessage) => !Array.isArray(msg.content)
      ) || []),
      ...pendingMessages,
    ],
    [conversation?.messages, pendingMessages]
  );

  useBackHandler(() => true);

  // Scroll logic based on the number of messages
  useEffect(() => {
    if (messages.length && flashListRef.current) {
      setTimeout(() => {
        if (lastUserMessageIndex !== null) {
          // Scroll to the user's question
          flashListRef.current?.scrollToIndex({
            index: lastUserMessageIndex,
            animated: true,
            viewPosition: 0, // Align the top of the item with the top of the list
          });
        } else {
          // If there's only one message, scroll to the top
          flashListRef.current?.scrollToOffset({
            offset: 0,
            animated: true,
          });
        }
      }, 100);
    }
  }, [messages, lastUserMessageIndex]);

  // Scroll to bottom when keyboard appears
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        flashListRef.current?.scrollToOffset({
          offset: 100000,
          animated: true,
        });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (conversationMode === 'RANDOM_CONVERSATION') {
      setRandomQuestions(shuffleArray(RANDOM_QUESTIONS).slice(0, 5));
    }
  }, [conversationMode]);

  useRequestAppRatingOnce({
    isLoading,
    isFetchingAllConversationsPending,
    userInfo,
    requestAppRatingWithDelay,
  });

  if (isLoading && conversationMode !== 'RANDOM_CONVERSATION') {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-blackEerie">
        <Branding isLogoVisible invertedColors />
        <ActivityIndicator
          size="large"
          className="my-6 items-center justify-center"
          color={isDark ? colors.charcoal[300] : colors.charcoal[100]}
        />
        <BounceLoader
          loadingMessages={LOADING_MESSAGES_CHATBOT}
          textClassName="text-black dark:text-white"
        />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-blackEerie">
      {DEVICE_TYPE.IOS && (
        <Toaster autoWiggleOnUpdate="toast-change" pauseWhenPageIsHidden />
      )}
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-white dark:bg-blackEerie">
          {/* Header */}
          <View className="flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-600 dark:bg-blackEerie">
            <Icon
              size={20}
              containerStyle="rounded-full bg-blackEerie p-1"
              onPress={() => {
                stopSpeaking();
                router.push('/(tabs)/');
              }}
              icon={<CloseIcon color={colors.white} />}
            />
            <View className="-left-2 flex-row items-center justify-center">
              <Image
                source={require('../ui/assets/images/doctor-microscopy.png')}
                className="mr-2 size-8 rounded-full"
              />
              <View>
                <Text className="ml-2 font-bold-nunito text-xl dark:text-white">
                  Aura
                </Text>
                {isSending ? (
                  <Text className="ml-2 text-xs text-gray-500 dark:text-white">
                    {translate('general.typing')}
                  </Text>
                ) : (
                  <View className="flex-row items-center gap-2">
                    <View className="size-2 rounded-full bg-success-400" />
                    <Text className="text-xs text-gray-500 dark:text-white">
                      {translate('general.online')}
                    </Text>
                  </View>
                )}
              </View>
            </View>
            <View>
              {!!mediaSource && (
                <AttachmentPreview
                  filePath={mediaSource as string}
                  isVideo={isVideo}
                  className="size-[40px] rounded-xl border-0"
                  isEntirelyClickable
                />
              )}
            </View>
          </View>
          {conversationMode === 'RANDOM_CONVERSATION' &&
            !pendingMessages.length &&
            !conversation &&
            !!RANDOM_QUESTIONS.length && (
              <ScrollView
                contentContainerClassName="h-[90%] justify-end"
                keyboardShouldPersistTaps="handled"
              >
                <AnimatedChatQuestions
                  questions={randomQuestions}
                  onSelect={(question) => {
                    if (
                      userInfo.isFreeTrialOngoing &&
                      conversationsCount >= MAX_CONVERSATIONS_ALLOWED_FREE_TRIAL
                    ) {
                      return Toast.showCustomToast(
                        <CustomAlert
                          title={translate('general.attention')}
                          subtitle={translate('alerts.chatAndMediaFilesLimit')}
                          buttons={[
                            {
                              label: translate(
                                'components.UpgradeBanner.heading'
                              ),
                              variant: 'default',
                              onPress: () =>
                                wait(500).then(() =>
                                  router.navigate('/paywall-new')
                                ),
                              buttonTextClassName: 'dark:text-white',
                              className:
                                'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                            },
                          ]}
                        />,
                        {
                          position: 'middle',
                          duration: Infinity,
                        }
                      );
                    }
                    handleSendMessage(question);
                  }}
                />
              </ScrollView>
            )}

          {/* Messages List */}
          <FlashList
            ref={flashListRef}
            data={messages}
            extraData={[
              isSpeaking,
              userInfo?.isFreeTrialOngoing,
              conversationsCount,
            ]} //triggers a reset
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              padding: 16,
              paddingBottom: 8,
            }}
            renderItem={({ item, index }) => {
              const isAssistantMessage = item.role !== 'user';
              const shouldBlurMessage =
                userInfo?.isFreeTrialOngoing &&
                conversationsCount >= BLURRING_CONTENT_CONVERSATIONS_LIMIT &&
                isAssistantMessage;

              return (
                <ChatBubble
                  message={item}
                  isUser={item.role === 'user'}
                  onRetrySendMessage={() => handleRetryMessage(item)}
                  speak={(text) => handleSpeak(index.toString(), text)}
                  isSpeaking={currentlySpeakingId === index.toString()}
                  shouldBlur={shouldBlurMessage}
                  onUnlock={handleUnlockMessage}
                />
              );
            }}
            estimatedItemSize={100}
            ListFooterComponent={isSending ? <TypingIndicator /> : null}
          />

          {/* Input Area */}
          <View className="border-t border-gray-200 bg-white px-4 pb-2 pt-4 dark:border-blackEerie dark:bg-blackEerie">
            <View
              className={`flex-row items-center rounded-2xl border-2 border-primary-900/60 bg-gray-100 px-4 py-1 dark:bg-black`}
            >
              {conversationMode === 'RANDOM_CONVERSATION' && (
                <Icon
                  icon={<Camera />}
                  size={28}
                  color={isDark ? colors.white : colors.black}
                  containerStyle="-left-2"
                  onPress={() => {
                    if (
                      userInfo.isFreeTrialOngoing &&
                      conversationsCount >= MAX_CONVERSATIONS_ALLOWED_FREE_TRIAL
                    ) {
                      return Toast.showCustomToast(
                        <CustomAlert
                          title={translate('general.attention')}
                          subtitle={translate('alerts.chatAndMediaFilesLimit')}
                          buttons={[
                            {
                              label: translate(
                                'components.UpgradeBanner.heading'
                              ),
                              variant: 'default',
                              onPress: () =>
                                wait(500).then(() =>
                                  router.navigate('/paywall-new')
                                ),
                              buttonTextClassName: 'dark:text-white',
                              className:
                                'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                            },
                          ]}
                        />,
                        {
                          position: 'middle',
                          duration: Infinity,
                        }
                      );
                    }

                    router.navigate('/upload-file-flow');
                  }}
                />
              )}
              <TextInput
                className="flex-1 py-3 text-base text-gray-800 dark:text-white"
                value={userMessage}
                onChangeText={setUserMessage}
                placeholder={translate('general.chatbotPlaceholder')}
                placeholderTextColor={isDark ? colors.charcoal[300] : '#9CA3AF'}
                multiline
                maxLength={400}
              />

              <TouchableOpacity
                onPress={() => {
                  if (
                    userInfo.isFreeTrialOngoing &&
                    conversationsCount >= MAX_CONVERSATIONS_ALLOWED_FREE_TRIAL
                  ) {
                    /**
                     * isFirstTime is used to check if the user installs the app for the first time
                     * usually this variable is set to false after first onboarding, but if the first onboarding is not shown again after reinstallation, the thi variable will remain to true
                     * thats why we need to set it to false based on an action instead of creating another useEffect in layout
                     *  */
                    return Toast.showCustomToast(
                      <CustomAlert
                        title={translate('general.attention')}
                        subtitle={translate('alerts.chatAndMediaFilesLimit')}
                        buttons={[
                          {
                            label: translate(
                              'components.UpgradeBanner.heading'
                            ),
                            variant: 'default',
                            onPress: () =>
                              wait(500).then(() =>
                                router.navigate('/paywall-new')
                              ),
                            buttonTextClassName: 'dark:text-white',
                            className:
                              'flex-1 rounded-xl h-[48] bg-primary-900 active:opacity-80 dark:bg-primary-900',
                          },
                        ]}
                      />,
                      {
                        position: 'middle',
                        duration: Infinity,
                      }
                    );
                  }

                  handleSendMessage(userMessage);
                }}
                disabled={isSending || !userMessage.trim()}
                className={twMerge(
                  'ml-2 p-2 rounded-full',
                  userMessage.trim()
                    ? 'bg-blue-500 dark:bg-primary-900'
                    : 'bg-gray-300 dark:bg-charcoal-400'
                )}
              >
                <Ionicons name="send" size={20} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;

type Message = {
  isError: boolean;
};

type Colors = {
  danger: Record<number, string>;
  white: string;
  charcoal: Record<number, string>;
  primary: Record<number, string>;
};

type StyleObject = Record<string, React.CSSProperties>;

function getChatMessagesStyles(
  message: Message,
  isUser: boolean,
  colors: Colors
): {
  lightStyles: StyleObject;
  darkStyles: StyleObject;
} {
  const baseTextColor = message.isError
    ? colors.danger[800]
    : isUser
      ? colors.white
      : colors.charcoal[800];

  const darkTextColor = message.isError ? colors.danger[800] : colors.white;

  const lightStyles: StyleObject = {
    body: {
      marginTop: -7,
      marginBottom: -7,
      fontSize: 15,
      lineHeight: 22,
      color: baseTextColor,
    },
    heading1: {
      color: baseTextColor,
    },
    paragraph: {
      fontFamily: 'Font-Regular',
    },
    list_item: {
      fontFamily: 'Font-Regular',
    },
    code_inline: {
      backgroundColor: colors.primary[900],
      fontFamily: 'Font-Regular',
    },
    span: {
      fontFamily: 'Font-Regular',
    },
    strong: {
      fontFamily: 'Font-Extra-Bold',
      fontWeight: '800',
    },
    em: {
      fontFamily: 'Font-Regular',
      fontStyle: 'italic',
    },
  };

  const darkStyles: StyleObject = {
    body: {
      marginTop: -7,
      marginBottom: -7,
      fontSize: 15,
      lineHeight: 22,
      color: darkTextColor,
    },
    heading1: {
      fontFamily: 'Font-Extra-Bold',
      color: darkTextColor,
    },
    heading2: {
      fontFamily: 'Font-Extra-Bold',
      fontWeight: '800',
    },
    paragraph: {
      fontFamily: 'Font-Regular',
    },
    list_item: {
      fontFamily: 'Font-Regular',
    },
    code_inline: {
      backgroundColor: colors.primary[900],
      fontFamily: 'Font-Regular',
    },
    span: {
      fontFamily: 'Font-Regular',
    },
    strong: {
      fontFamily: 'Font-Extra-Bold',
      fontWeight: '800',
    },
    em: {
      fontFamily: 'Font-Regular',
      fontStyle: 'italic',
    },
  };

  return { lightStyles, darkStyles };
}
