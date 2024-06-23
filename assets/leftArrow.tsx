import * as React from 'react';

import Svg, { Path } from 'react-native-svg';
export const LeftArrow = (props) => (
  <Svg xmlns={'http://www.w3.org/2000/svg'} width={24} height={24} fill={'none'} {...props}>
    <Path
      stroke={'#525866'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={2}
      d={'m10 19-7-7m0 0 7-7m-7 7h18'}
    />
  </Svg>
);
