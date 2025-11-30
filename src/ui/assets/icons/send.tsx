import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { type ISvgProps } from '@/types';

export const SendIcon = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M22.5 11.99a1.499 1.499 0 0 1-.767 1.312L5.991 22.303c-.226.128-.481.196-.741.197a1.5 1.5 0 0 1-1.406-2l2.531-7.495a.375.375 0 0 1 .349-.255H13.5a.75.75 0 0 0 .75-.8.768.768 0 0 0-.774-.7h-6.75a.375.375 0 0 1-.356-.255L3.84 3.501a1.5 1.5 0 0 1 2.145-1.807l15.75 8.99a1.5 1.5 0 0 1 .765 1.306Z"
    />
  </Svg>
);
