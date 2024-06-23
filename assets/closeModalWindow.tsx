import * as React from 'react';

import Svg, { Path } from 'react-native-svg';
export const CloseWindowSvg = (props) => (
  <Svg xmlns={'http://www.w3.org/2000/svg'} width={14} height={14} fill={'none'} {...props}>
    <Path
      stroke={'#ffffff'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={2}
      d={'m1 1 12 12M1 13 13 1 1 13Z'}
    />
  </Svg>
);
