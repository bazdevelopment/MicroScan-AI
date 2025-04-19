// src/screens/PrivacyPolicy.js
import { PRIVACY_POLICY } from '__mocks__/reports/privacy-policy';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from '@/ui';

const PrivacyPolicy = () => {
  return (
    <View className="dark:bg-blackEerie flex-1 bg-white p-4">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text className="font-bold-nunito mb-4 text-center text-xl text-blue-600">
          Privacy Policy for MicroScan AI
        </Text>
        <Text className="mb-6 text-center text-sm text-gray-500">
          Last Updated: {PRIVACY_POLICY.last_updated}
        </Text>

        {/* Render sections dynamically */}
        {PRIVACY_POLICY.sections?.map((section, index) => (
          <View key={index} className="mb-6">
            {/* Section Title */}
            <Text className="font-semibold-nunito text-xl text-gray-800">
              {section.title}
            </Text>

            {/* Render section content */}
            {section.content?.map((contentItem, contentIndex) => (
              <Text key={contentIndex} className="mb-2 text-base text-gray-600">
                {contentItem.description}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
