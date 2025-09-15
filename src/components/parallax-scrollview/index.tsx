/* eslint-disable max-lines-per-function */
import React, { cloneElement, useState } from 'react';
import {
  type NativeScrollEvent,
  useWindowDimensions,
  View,
} from 'react-native';
import { runOnJS } from 'react-native-reanimated';
import { StickyHeaderScrollView } from 'react-native-sticky-parallax-header';

import { type IParallaxScrollView } from './parallax-scrollview.interface';

const ParallaxScrollView = ({
  _headerHeight = 110,
  ForegroundComponent,
  HeaderBarComponent,
  children,
  onScroll,
  onScrollEndDrag,
  scrollHeight,
  scrollValue,
  scrollViewRef,
  onMomentumScrollEnd,
}: IParallaxScrollView) => {
  const { width: windowWidth } = useWindowDimensions();

  const [isHeaderPrio, setIsHeaderPrio] = useState(scrollValue.value !== 0);

  // Function to detect if the user has scrolled to the bottom
  const handleScroll = (event: NativeScrollEvent) => {
    'worklet';
    const { contentOffset, contentSize, layoutMeasurement } = event;
    /**
     * check if the scroll is performed so we know to decrease zIndex otherwise the buttons won't work
     * 5 is just a reference
     */
    if (contentOffset.y > 5) {
      runOnJS(setIsHeaderPrio)(true);
    }
    if (contentOffset.y < 5) {
      runOnJS(setIsHeaderPrio)(false);
    }

    // Call the onScroll handler from sticky header props
    onScroll(event);
  };

  return (
    <View className="flex-1 bg-white dark:bg-blackEerie">
      {/* Render Header Bar */}
      <View
        className="absolute inset-x-0 items-center overflow-hidden"
        style={{
          width: windowWidth,
          top: isHeaderPrio ? 0 : -1000, // Move way off screen
          zIndex: 10,
        }}
      >
        {cloneElement(HeaderBarComponent, { scrollValue })}
      </View>
      <StickyHeaderScrollView
        ref={scrollViewRef}
        bounces
        onScroll={handleScroll}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderHeader={() => (
          <View style={{ height: scrollHeight }}>
            {/* <StatusBar hidden /> */}
            {cloneElement(ForegroundComponent, { scrollValue })}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-[300px] mt-14">{children}</View>
      </StickyHeaderScrollView>
    </View>
  );
};

export default ParallaxScrollView;
