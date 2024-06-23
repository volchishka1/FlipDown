import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface HeaderComponentProps {
  headerName: string;
}
export const HeaderComponent: FC<HeaderComponentProps> = (props) => {
  const { headerName } = props;
  return (
    <View style={textStyle.rootHeaderContainer}>
      <Text style={textStyle.paragraphStyle}>{headerName}</Text>
    </View>
  );
};
