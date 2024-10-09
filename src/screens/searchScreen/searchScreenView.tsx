import {
  Image,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import React, { FC } from 'react';

import { CustomButton } from '@components/buttonComponent/customButtonComponent';
import { LogoComponent } from '@components/logoComponent/logoComponent';

import { searchScreenStyles } from './styles';
import { SearchScreenProps } from './types';
import { strings } from '@constants/textConst';
import { BannerAdSize, GAMBannerAd } from 'react-native-google-mobile-ads';
import { BannerView } from 'react-native-yandex-mobile-ads';
import { ModalGradeComponent } from '@components/modalGradeComponent';

export const SearchScreenView: FC<SearchScreenProps> = (props) => {
  const {
    link = '',
    provider = '',
    preview = '',
    setInputValue = () => {},
    saveMusic = () => {},
    saveVideo = () => {},
    setLink = () => {},
    fetchCopiedText = () => {},
    isLoad = false,
    isLoadMusic = false,
    isLoadVideo = false,
    showLoad = false,
    showGradeModal = false,
    textInputColorText,
    bannerYandexAdvId = '',
    bannerGoogleAdvId = '',
  } = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={searchScreenStyles.rootContainer}>
        {showGradeModal && <ModalGradeComponent />}
        <View style={searchScreenStyles.topContainer}>
          <LogoComponent />
        </View>
        <View style={searchScreenStyles.inputContainer}>
          <TextInput
            value={link}
            onChangeText={setLink}
            accessibilityLabel={'Text input field'}
            placeholder={strings.getString('insert_your_link')}
            style={[searchScreenStyles.input, textInputColorText]}
          />
          <View style={searchScreenStyles.pasteButtonContainerStyle}>
            <CustomButton
              onPress={fetchCopiedText}
              textButton={strings.getString('paste')}
              textButtonStyle={searchScreenStyles.textPasteButtonStyle}
              isLoad={false}
              style={searchScreenStyles.pasteButtonStyle}
            />
          </View>
          <CustomButton
            onPress={setInputValue}
            textButton={strings.getString('find')}
            textButtonStyle={searchScreenStyles.textButtonStyle}
            isLoad={isLoad}
            style={searchScreenStyles.searchButtonStyle}
          />
        </View>
        <View style={searchScreenStyles.bottomContainer}>
          {showLoad && (
            <View style={searchScreenStyles.dataContainer}>
              <Image style={searchScreenStyles.imageStyle} source={{ uri: `${preview}` }} />
              <View style={searchScreenStyles.buttonDataContainer}>
                <CustomButton
                  onPress={saveVideo}
                  textButton={strings.getString('download_video')}
                  style={searchScreenStyles.buttonStyle}
                  isLoad={isLoadVideo}
                />
                <CustomButton
                  onPress={saveMusic}
                  textButton={strings.getString('download_mp3')}
                  style={searchScreenStyles.buttonStyle}
                  isLoad={isLoadMusic}
                />
              </View>
            </View>
          )}
        </View>
        <View style={searchScreenStyles.bannerAdvertising}>
          {provider === 'yandex' ? (
            <BannerView
              adUnitId={bannerYandexAdvId}
              size='BANNER_320x50'
              onLoad={() => console.log('onLoad')}
              onLeftApplication={() => console.log('onLeftApplication')}
              onReturnedToApplication={() => console.log('onReturnedToApplication')}
              onError={(err: any) => console.log('error', err)}
            />
          ) : (
            <GAMBannerAd
              unitId={bannerGoogleAdvId}
              sizes={[BannerAdSize.BANNER]}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
              onAdLoaded={() => {
                console.log('Advert loaded');
              }}
              onAdFailedToLoad={(error) => {
                console.error('Advert failed to load: ', error);
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
