import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CustomButton } from '@components/buttonComponent/customButtonComponent';

import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const { photos } = props;
  return (
    <SafeAreaView style={downloadScreenStyles.saveAriaView}>
      <ScrollView style={downloadScreenStyles.rootContainer}>
        <View style={downloadScreenStyles.centerContainer}>
          {photos.map((img) => (
            <TouchableOpacity>
              <View style={downloadScreenStyles.itemContainer}>
                <View style={downloadScreenStyles.imageContainer}>
                  <Image
                    key={img?.node?.image?.uri}
                    style={downloadScreenStyles.images}
                    source={img.node.image}
                  />
                </View>
                <View style={downloadScreenStyles.buttonContainer}>
                  {/*<CustomButton*/}
                  {/*  style={downloadScreenStyles.button}*/}
                  {/*  textButton={'Delete'}*/}
                  {/*  isLoad={false}*/}
                  {/*/>*/}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
