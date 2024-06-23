import { Image, SafeAreaView, Text, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CustomButton } from '../../components/buttonComponent/customButtonComponent';

import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const { photos } = props;
  return (
    <SafeAreaView style={downloadScreenStyles.saveAriaView}>
      <ScrollView style={downloadScreenStyles.rootContainer}>
        {photos.map((img) => (
          <View style={downloadScreenStyles.centerContainer}>
            <View style={downloadScreenStyles.itemContainer}>
              <View style={downloadScreenStyles.imageContainer}>
                <Image
                  key={img?.node?.image?.uri}
                  style={downloadScreenStyles.images}
                  source={img.node.image}
                />
                <View style={downloadScreenStyles.titleContainer}>
                  <Text key={img.node.image.uri} style={downloadScreenStyles.title}>
                    {img.node?.type}
                  </Text>
                </View>
              </View>
              <View style={downloadScreenStyles.buttonContainer}>
                <CustomButton
                  style={downloadScreenStyles.button}
                  textButton={'Delete'}
                  isLoad={false}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
