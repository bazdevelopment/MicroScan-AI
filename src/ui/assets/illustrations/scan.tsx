import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { type ISvgProps } from '@/types/svg-types';
import colors from '@/ui/colors';

export const ScanIllustration = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    className="icon glyph"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      d="M8 22H4a2 2 0 0 1-2-2v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2ZM20 22h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4a2 2 0 0 1-2 2Z"
      style={{
        fill: props.fill || colors.white,
      }}
    />
    <Path
      d="M8 22H4a2 2 0 0 1-2-2v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2ZM3 9a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H4v4a1 1 0 0 1-1 1ZM21 9a1 1 0 0 1-1-1V4h-4a1 1 0 0 1 0-2h4a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1ZM12 17a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM8 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1ZM16 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
      style={{
        fill: props.fill || colors.white,
      }}
    />
  </Svg>
);
