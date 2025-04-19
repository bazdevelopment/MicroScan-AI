import React from 'react';
import { View } from 'react-native';

import { Text } from '@/ui';

import { type IIUserInfoCard } from './user-info-card.interface';

const UserInfoCard = ({
  age = '-',
  gender = '-',
  occupation = '-',
  remainingScans = '-',
  className = '',
}: IIUserInfoCard) => {
  const userInfo = [
    { label: 'Age', value: age, id: '1' },
    { label: 'Gender', value: gender, id: '2' },
    { label: 'Occupation', value: occupation, id: '3' },
    { label: 'Scans', value: remainingScans, id: '4' },
  ];
  return (
    <View className={className}>
      <View className="mb-2 flex-row justify-between gap-6">
        {userInfo.map(
          (item, index) =>
            // Only render the item if its value exists
            Boolean(item.id) && (
              <View key={index}>
                <Text className="font-bold-nunito text-sm text-white">
                  {item.label}
                </Text>
                <Text className="ml-px text-sm text-white">{item.value}</Text>
              </View>
            ),
        )}
      </View>
    </View>
  );
};

export default UserInfoCard;
