import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import { generateUniqueId } from 'functions/utilities/generate-unique-id';
import { useCallback } from 'react';

const Chat = () => {
  useFocusEffect(
    useCallback(() => {
      router.navigate({
        pathname: '/chat-screen',
        params: {
          conversationId: generateUniqueId(),
          mediaSource: '',
          mimeType: '',
          conversationMode: 'RANDOM_CONVERSATION',
        },
      });
    }, [])
  );

  return null;
};

export default Chat;
