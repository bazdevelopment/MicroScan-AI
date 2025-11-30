import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import { type ISvgProps } from '@/types/svg-types';

export const AddMediaPicker = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill={props.color || '#001A33'} rx={20} />
    <Path
      stroke={props.color || '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 13v14M13 20h14"
    />
  </Svg>
);
