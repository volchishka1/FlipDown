import { Image, SafeAreaView } from 'react-native';

import React, { FC } from 'react';

import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const { photos } = props;
  return (
    <SafeAreaView style={downloadScreenStyles.rootContainer}>
      {photos.map((obj, index) => (
        <Image key={index} style={{ width: '20%', height: '10%' }} source={obj.node.image} />
      ))}
    </SafeAreaView>
  );
};
