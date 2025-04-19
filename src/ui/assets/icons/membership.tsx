import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { type ISvgProps } from '@/types/svg-types';

const MembershipIcon = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 256 178"
    {...props}
  >
    <Path d="M183.882 38.248c0 8.995 7.292 16.287 16.287 16.287s16.287-7.292 16.287-16.287-7.292-16.287-16.287-16.287-16.287 7.292-16.287 16.287zm-16.689 54.526v-12.72c0-11.179 9.126-20.349 20.349-20.349h26.642c11.179 0 20.349 9.126 20.349 20.349v12.72h-67.34zM95.721 2.416v23.543c-2.871 0-8.236.615-12.1 1.784-10.322 3.123-19.031 10.11-24.369 21.786L2 175.584h78.75l5.069-16.893c22.193-5.386 38.809-22.446 45.51-43.894l.084.001a24.21 24.21 0 0 1 .627-2.214H254V2.416H95.721zm150.404 102.293H115.408c-2.957 15.124-14.146 28.884-29.224 35.043a3.94 3.94 0 0 1-5.135-2.156 3.938 3.938 0 0 1 2.156-5.134c14.768-6.032 25.085-20.66 25.105-35.583v-3.981h40.386c5.966-.001 10.803-4.837 10.803-10.803 0-5.962-4.83-10.797-10.793-10.802l-70.91-.053a3.939 3.939 0 0 1 0-7.876h25.799V10.291h142.529v94.418zm-130.717-78.75H159.5v7.875h-44.092v-7.875zm0 19.688H159.5v7.875h-44.092v-7.875z" />
  </Svg>
);
export default MembershipIcon;
