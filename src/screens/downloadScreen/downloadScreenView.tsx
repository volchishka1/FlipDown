import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const {} = props;
  return (
    <View style={downloadScreenStyles.rootContainer}>
      <Text style={{ color: 'white' }}>{'Hello app'}</Text>
    </View>
  );
};
