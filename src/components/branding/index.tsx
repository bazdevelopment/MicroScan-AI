import React from 'react';

import { Image, Text, View } from '@/ui';

const IconTransparent = require('../../../assets/icon_transparent.png');

const Branding = ({
  isLogoVisible = false,
  className,
  invertedColors,
}: {
  isLogoVisible?: boolean;
  className?: string;
  invertedColors?: boolean;
}) => {
  const textColor = invertedColors ? 'text-black' : 'text-white';
  return (
    <View className={`flex-row items-center ${className}`}>
      {isLogoVisible && (
        <>
          <Image source={IconTransparent} className="size-[50px]" />
        </>
      )}

      <View className={`${isLogoVisible ? 'ml-3' : ''}`}>
        <Text
          className={`text-center font-bold-nunito text-2xl tracking-[2px] ${textColor}`}
        >
          MicroScan AI
        </Text>
        {/* <Text
          className={`text-center font-medium-nunito text-sm tracking-[3px] ${textColor}`}
        >
          ANALYZER
        </Text> */}
      </View>
    </View>
  );
};

export default Branding;
