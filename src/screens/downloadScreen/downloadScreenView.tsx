import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CustomButton } from '@components/buttonComponent/customButtonComponent';

import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';
import Video from 'react-native-video';
import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';
import { BasketSvg } from '@assets/basket';
import { CloseWindowSvg } from '@assets/closeModalWindow';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const { photos, url, setUrl, deleteFile } = props;
  return (
    <>
      {url !== '' ? (
        <View>
          <Video source={{ uri: url }} style={downloadScreenStyles.videoStyle} />
          <CloseWindowComponent
            iconSvg={<CloseWindowSvg />}
            goToCloseButton={() => setUrl('')}
            style={{ position: 'absolute', top: 40, right: 20, zIndex: 100 }}
            buttonStyle={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <CloseWindowComponent
            iconSvg={<BasketSvg />}
            goToCloseButton={() => deleteFile()}
            style={{ position: 'absolute', top: 100, right: 20, zIndex: 100 }}
            buttonStyle={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </View>
      ) : null}
      <SafeAreaView style={downloadScreenStyles.saveAriaView}>
        <ScrollView style={downloadScreenStyles.rootContainer}>
          <View style={downloadScreenStyles.centerContainer}>
            {photos.map((img) => (
              <TouchableOpacity
                key={img?.node?.image?.uri}
                onPress={() => {
                  setUrl(img.node.image.uri);
                }}
              >
                <View style={downloadScreenStyles.itemContainer}>
                  <View style={downloadScreenStyles.imageContainer}>
                    <Image style={downloadScreenStyles.images} source={img.node.image} />
                  </View>
                  <View style={downloadScreenStyles.buttonContainer}></View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
