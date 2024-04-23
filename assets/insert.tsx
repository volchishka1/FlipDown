import * as React from 'react';

import Svg, { Path } from 'react-native-svg';
export const InsertSvg = (props) => (
  <Svg xmlns={'http://www.w3.org/2000/svg'} data-name={'Layer 1'} viewBox={'0 0 32 32'} {...props}>
    <Path
      d={
        'M32 5.88c-.19-3-1.93-4.74-5-4.87H11C8 1 6.13 2.88 6 6v1H5C2 7 .13 8.88 0 12v14.08A4.78 4.78 0 0 0 4.87 31h16.26A4.86 4.86 0 0 0 26 26v-1h1.13A4.86 4.86 0 0 0 32 20V5.88ZM20.93 27H5.07c-.93-.07-1-.29-1.07-1V12.09C4 11 4.34 11 5 11h15.91c.85 0 1 .12 1.09 1.07v13.84c0 .76-.19 1.02-1.07 1.09Zm6-6H26v-9.12c-.19-3-1.93-4.74-5-4.87H10v-.92C10 5 10.34 5 11 5h15.91c.85 0 1 .12 1.09 1.07v13.84c0 .76-.19 1.02-1.07 1.09Z'
      }
      style={{
        fill: '#ffffff',
      }}
    />
  </Svg>
);
