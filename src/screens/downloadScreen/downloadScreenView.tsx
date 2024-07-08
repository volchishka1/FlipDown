import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';
import { setUrl } from '@root/store/actions';
import { useAppDispatch } from '@root/hooks/hooks';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const { photos, navigateToFullVideoScreen } = props;
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={downloadScreenStyles.saveAriaView}>
      <ScrollView style={downloadScreenStyles.rootContainer}>
        <View style={downloadScreenStyles.centerContainer}>
          {photos.map((img) => (
            <TouchableOpacity
              style={downloadScreenStyles.imageContainer}
              key={img?.node?.image?.uri}
              onPress={() => {
                dispatch(setUrl(img.node.image.uri));
                navigateToFullVideoScreen();
              }}
            >
              <Image style={downloadScreenStyles.images} source={img.node.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
