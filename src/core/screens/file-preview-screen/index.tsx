/* eslint-disable max-lines-per-function */
import { router } from 'expo-router';
import { firebaseAuth } from 'firebase/config';
import { useColorScheme } from 'nativewind';
import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  Keyboard,
  Modal as RNModal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import { Toaster } from 'sonner-native';

import { useAnalyzeImage, useAnalyzeVideo } from '@/api/image/image.hooks';
import AttachmentPreview from '@/components/attachment-preview';
import ImageAnnotationStudio from '@/components/image-annotation-studio';
import ScanningModal from '@/components/image-scanner-modal';
import LanguageModal from '@/components/modals/language-analysis-modal';
import OpenStudioSection from '@/components/open-studio-section';
import ProgressBar from '@/components/progress-bar';
import PromptSection from '@/components/prompt-section';
import Toast from '@/components/toast';
import { AI_ANALYSIS_LANGUAGE_SELECTION } from '@/constants/language';
import { translate, useSelectedLanguage } from '@/core/i18n';
import { getStorageItem, setStorageItem } from '@/core/storage';
import { checkIsVideo } from '@/core/utilities/check-is-video';
import { DEVICE_TYPE } from '@/core/utilities/device-type';
import { getBase64ImageUri } from '@/core/utilities/get-base64-uri';
import {
  createFormDataImagePayload,
  createFormDataVidePayload,
} from '@/core/utilities/upload-media';
import { Button, colors, useModal } from '@/ui';
import { WandSparkle } from '@/ui/assets/icons';
import { MultiLanguage } from '@/ui/assets/icons/multi-language';
import { SelectionIcon } from '@/ui/assets/icons/selection';

import { type IFilePreviewScreen } from './file-preview-screen.interface';

// Language types and constants
type TLanguages = {
  [key: string]: string;
};

export const LANGUAGES: TLanguages = {
  // --- Original List (with consistent naming) ---
  en: 'English 🇺🇸',
  es: 'Español 🇪🇸',
  'es-ES': 'Español 🇪🇸',
  'es-MX': 'Español (Mexico) 🇲🇽',
  fr: 'Français 🇫🇷',
  'fr-CA': 'Français (Canada) 🇫🇷',
  de: 'Deutsch 🇩🇪',
  it: 'Italiano 🇮🇹',
  pt: 'Português 🇵🇹',
  ru: 'Русский 🇷🇺',
  ja: '日本語 🇯🇵',
  ko: '한국어 🇰🇷',
  zh: '中文 (简体) 🇨🇳',
  'zh-TW': '中文 (繁體) 🇹🇼',
  hi: 'हिन्दी 🇮🇳',
  ar: 'العربية 🇸🇦',
  tr: 'Türkçe 🇹🇷',
  pl: 'Polski 🇵🇱',
  nl: 'Nederlands 🇳🇱',
  ro: 'Română 🇷🇴',
  uk: 'Українська 🇺🇦',
  sv: 'Svenska 🇸🇪',
  da: 'Dansk 🇩🇰',
  fi: 'Suomi 🇫🇮',
  no: 'Norsk 🇳🇴',
  cs: 'Čeština 🇨🇿',
  hu: 'Magyar 🇭🇺',
  el: 'Ελληνικά 🇬🇷',
  bg: 'Български 🇧🇬',
  hr: 'Hrvatski 🇭🇷',
  sl: 'Slovenščina 🇸🇮',
  lt: 'Lietuvių 🇱🇹',
  lv: 'Latviešu 🇱🇻',

  // --- Additional European Languages ---
  'pt-BR': 'Português (Brasil) 🇧🇷',
  'pt-PT': 'Português (Portugal) 🇵🇹',
  sk: 'Slovenčina 🇸🇰',
  et: 'Eesti 🇪🇪',
  ga: 'Gaeilge 🇮🇪',
  is: 'Íslenska 🇮🇸',
  mt: 'Malti 🇲🇹',
  ca: 'Català 🇦🇩',
  eu: 'Euskara',
  gl: 'Galego',
  sr: 'Српски 🇷🇸',
  sq: 'Shqip 🇦🇱',
  mk: 'Македонски 🇲🇰',
  be: 'Беларуская 🇧🇾',
  cy: 'Cymraeg 🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  la: 'Latina 🇻🇦',

  // --- Additional Asian Languages ---
  id: 'Bahasa Indonesia 🇮🇩',
  ms: 'Bahasa Melayu 🇲🇾',
  vi: 'Tiếng Việt 🇻🇳',
  th: 'ภาษาไทย 🇹🇭',
  tl: 'Tagalog 🇵🇭',
  he: 'עברית 🇮🇱',
  fa: 'فارسی 🇮🇷',
  ur: 'اردو 🇵🇰',
  bn: 'বাংলা 🇧🇩',
  pa: 'ਪੰਜਾਬੀ 🇮🇳',
  gu: 'ગુજરાતી 🇮🇳',
  ta: 'தமிழ் 🇮🇳',
  te: 'తెలుగు 🇮🇳',
  kn: 'ಕನ್ನಡ 🇮🇳',
  ml: 'മലയാളം 🇮🇳',
  mr: 'मराठी 🇮🇳',
  ne: 'नेपाली 🇳🇵',
  si: 'සිංහල 🇱🇰',
  km: 'ខ្មែរ 🇰🇭',
  lo: 'ພາສາລາວ 🇱🇦',
  my: 'မြန်မာဘာသာ 🇲🇲',
  ka: 'ქართული 🇬🇪',
  hy: 'Հայերեն 🇦🇲',
  az: 'Azərbaycan 🇦🇿',
  uz: 'Oʻzbekcha 🇺🇿',
  kk: 'Қазақша 🇰🇿',

  // --- African Languages ---
  af: 'Afrikaans 🇿🇦',
  sw: 'Swahili 🇰🇪',
  ha: 'Hausa 🇳🇬',
  yo: 'Yorùbá 🇳🇬',
  ig: 'Igbo 🇳🇬',
  zu: 'Zulu 🇿🇦',
  xh: 'Xhosa 🇿🇦',
  am: 'Amharic 🇪🇹',
  om: 'Oromo 🇪🇹',
  so: 'Somali 🇸🇴',
  mg: 'Malagasy 🇲🇬',
};

const FilePreviewScreen = ({
  collectedData,
  currentScreenIndex,
  totalSteps,
  resetFlow,
}: IFilePreviewScreen) => {
  const [promptMessage, setPromptMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [squares, setSquares] = useState([]);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const { language: appLanguage } = useSelectedLanguage();
  const languageAIResponsesLocally = getStorageItem(
    AI_ANALYSIS_LANGUAGE_SELECTION
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languageAIResponsesLocally || appLanguage
  );

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const languageModalRef = useModal();

  const originalImage = collectedData.fileUri;
  const [imageUrlHighlighted, setImageUrlHighlighted] = useState(originalImage);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const onUpdateImageUrlHighlighted = (newImageUrl: string) => {
    setImageUrlHighlighted(newImageUrl);
  };

  const handleOpenStudio = () => setIsStudioOpen(true);
  const handleCloseStudio = () => setIsStudioOpen(false);
  const handleCloseScanningModal = () => setIsModalVisible(false);

  const handleOpenLanguageSelector = useCallback(() => {
    languageModalRef.present();
  }, []);

  const handleCloseLanguageSelector = useCallback(() => {
    languageModalRef.dismiss();
  }, []);

  const handleLanguageSelect = useCallback(
    (languageCode: string) => {
      setSelectedLanguage(languageCode);
      setStorageItem(AI_ANALYSIS_LANGUAGE_SELECTION, languageCode);
      handleCloseLanguageSelector();
    },
    [handleCloseLanguageSelector]
  );

  const addSquare = () => {
    const width = 80 + Math.random() * 120;
    const height = 80 + Math.random() * 120;

    const newSquare = {
      id: Date.now(),
      x: (screenWidth - width) / 2.5,
      y: (screenHeight - height) / 2.5,
      width: width,
      height: height,
    };
    setSquares((prev) => [...prev, newSquare]);
  };

  const removeSquare = (id: string) => {
    setSquares((prev) => prev.filter((h) => h.id !== id));
  };

  const userId = firebaseAuth.currentUser?.uid as string;

  const videoPayload = createFormDataVidePayload({
    fileUri: imageUrlHighlighted as string,
    fileName: collectedData.fileName as string,
    fileMimeType: collectedData.fileMimeType as string,
    promptMessage,
    userId,
  });

  const imagePayload = createFormDataImagePayload({
    fileUri: imageUrlHighlighted as string,
    fileName: collectedData.fileName as string,
    fileMimeType: collectedData.fileMimeType as string,
    promptMessage: promptMessage,
    highlightedRegions: squares?.length?.toString(),
    userId,
  });

  const isVideo = checkIsVideo(collectedData.fileExtension!);

  const mediaSource = Boolean(collectedData.fileBase64)
    ? getBase64ImageUri(collectedData.fileBase64 as string)
    : imageUrlHighlighted;

  const onSuccess = ({
    conversationId,
    interpretationResult,
  }: {
    conversationId: string;
    interpretationResult: string;
  }) => {
    if (interpretationResult?.length > 200) {
      //make sure if the response is cut off by the model to not navigate to the chat screen and display an alert instead and let the user try again
      router.navigate({
        pathname: '/chat-screen',
        params: {
          conversationId,
          mediaSource,
          mimeType: collectedData.fileMimeType,
          conversationMode: 'IMAGE_SCAN_CONVERSATION',
        },
      });
      setIsModalVisible(false);
    } else {
      setIsModalVisible(false);
      Toast.warning(
        'Could you please try submitting again? It seems there was an issue with your internet connection.',
        {
          closeButton: true,
          duration: 20000,
        }
      );
    }

    // wait(1000).then(() => resetFlow());
  };

  const {
    mutate: handleAnalyzeImageUsingAi,
    error: errorAnalyzeImage,
    isPending: isPendingAnalyzeImage,
  } = useAnalyzeImage({
    onSuccessCallback: onSuccess,
    language: selectedLanguage,
    handleCloseScanningModal,
    resetFlow,
  });

  const {
    mutate: handleAnalyzeVideoUsingAI,
    error: errorAnalyzeVideo,
    isPending: isPendingAnalyzeVideo,
  } = useAnalyzeVideo({
    onSuccessCallback: onSuccess,
    language: selectedLanguage,
    handleCloseScanningModal,
    resetFlow,
  });
  const onAnalyze = () => {
    if (isVideo) {
      handleAnalyzeVideoUsingAI(videoPayload);
    } else {
      handleAnalyzeImageUsingAi(imagePayload);
    }
  };

  const handleUpdatePromptMessage = (message: string) => {
    setPromptMessage(message);
  };

  return (
    <KeyboardStickyView offset={{ opened: 100 }}>
      {DEVICE_TYPE.IOS && (
        <Toaster autoWiggleOnUpdate="toast-change" pauseWhenPageIsHidden />
      )}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header with Progress */}
        <View className="dark:bg-black">
          <ProgressBar
            currentStep={currentScreenIndex + 1}
            totalSteps={totalSteps}
            isTextShown
            className="self-center"
          />
        </View>

        {/* Main Content Card */}
        <View className="mx-4 mt-4 overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-blackEerie">
          {/* Media Preview Section */}
          <View className="mt-2">
            <AttachmentPreview
              filePath={mediaSource as string}
              fileMimeType={collectedData.fileMimeType as string}
              isVideo={isVideo}
              additionalImageStyles="h-[120px]"
              additionalVideoStyles={{
                height: 120,
                width: '100%',
                borderRadius: 20,
              }}
            />
          </View>

          {/* Annotation Studio Section */}
          {!isVideo && (
            <View className="pb-4">
              <OpenStudioSection
                squares={squares}
                onOpenStudio={handleOpenStudio}
              />
            </View>
          )}

          {/* Language Selection */}
          <View className={`pb-4 ${isVideo && 'mt-4'}`}>
            <Text className="mb-2 font-bold-nunito text-lg text-gray-700 dark:text-white">
              {translate(
                'rootLayout.screens.languageAnalysisModal.languagePreferenceQuestion'
              )}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleOpenLanguageSelector}
              className="border-1 flex-row items-center justify-between rounded-xl border border-charcoal-200  p-4 dark:border-charcoal-600 dark:bg-blackEerie"
            >
              <View className="flex-row items-center">
                <MultiLanguage
                  width={20}
                  height={20}
                  color={isDark ? colors.white : colors.charcoal[600]}
                />
                <Text className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                  {LANGUAGES[selectedLanguage]}
                </Text>
              </View>
              <SelectionIcon
                width={20}
                height={20}
                color={isDark ? colors.white : colors.charcoal[600]}
              />
            </TouchableOpacity>
          </View>

          {/* Prompt Section */}
          <View className="pb-6">
            <PromptSection
              promptMessage={promptMessage}
              onUpdatePromptMessage={handleUpdatePromptMessage}
            />
          </View>
        </View>

        {/* Generate Button */}
        <Button
          iconPosition="right"
          label={translate(
            'rootLayout.screens.filePreviewScreen.generateReportButton'
          )}
          className="mt-2 h-[62px] w-[90%] gap-2 self-center rounded-full bg-primary-900 active:bg-primary-700 dark:bg-primary-900"
          textClassName="text-lg font-semibold-nunito text-white dark:text-white"
          size="lg"
          onPress={() => {
            setIsModalVisible(true);
            Keyboard.dismiss();
            onAnalyze();
          }}
          icon={<WandSparkle width={25} height={25} color={colors.white} />}
        />

        {/* Modals */}
        {isStudioOpen && (
          <RNModal
            visible={isStudioOpen}
            transparent
            animationType="fade"
            onRequestClose={handleCloseStudio}
          >
            <GestureHandlerRootView style={{ flex: 1 }}>
              <ImageAnnotationStudio
                closeTool={handleCloseStudio}
                onUpdateImageUrlHighlighted={onUpdateImageUrlHighlighted}
                imageUri={originalImage}
                squares={squares}
                addSquare={addSquare}
                removeSquare={removeSquare}
              />
            </GestureHandlerRootView>
          </RNModal>
        )}

        {isModalVisible && (
          <ScanningModal
            visible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            filePath={
              isVideo
                ? collectedData.fileUri
                : collectedData.fileBase64
                  ? getBase64ImageUri(collectedData.fileBase64)
                  : (imageUrlHighlighted as string)
            }
            isVideo={isVideo}
            error={errorAnalyzeImage || errorAnalyzeVideo}
            isPending={isPendingAnalyzeImage || isPendingAnalyzeVideo}
            onRetry={onAnalyze}
          />
        )}
      </ScrollView>

      {/* Language Selection Modal */}
      <LanguageModal
        ref={languageModalRef.ref}
        selectedLanguage={selectedLanguage}
        onLanguageSelect={handleLanguageSelect}
      />
    </KeyboardStickyView>
  );
};

export default FilePreviewScreen;
