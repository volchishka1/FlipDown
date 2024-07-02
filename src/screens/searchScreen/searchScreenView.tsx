import { Image, SafeAreaView, TextInput, View } from 'react-native';

import React, { FC } from 'react';

import { CustomButton } from '@components/buttonComponent/customButtonComponent';
import { LogoComponent } from '@components/logoComponent/logoComponent';

import { searchScreenStyles } from './styles';
import { SearchScreenProps } from './types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { strings } from '@constants/textConst';

export const SearchScreenView: FC<SearchScreenProps> = (props) => {
  const {
    link = '',
    preview = '',
    setInputValue = () => {},
    saveMusic = () => {},
    saveVideo = () => {},
    setLink = () => {},
    isLoad = false,
    showLoad = false,
  } = props;
  return (
    <SafeAreaView style={searchScreenStyles.rootContainer}>
      <KeyboardAwareScrollView scrollEnabled={false} style={searchScreenStyles.keyboardAwareStyle}>
        <View style={searchScreenStyles.topContainer}>
          <LogoComponent />
        </View>
        <View style={searchScreenStyles.inputContainer}>
          <TextInput
            value={link}
            onChangeText={setLink}
            accessibilityLabel={'Text input field'}
            placeholder={strings.getString('insert_your_link')}
            style={searchScreenStyles.input}
          />
          <CustomButton
            onPress={setInputValue}
            textButton={strings.getString('find')}
            isLoad={isLoad}
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
                  isLoad={false}
                />
                <CustomButton
                  onPress={saveMusic}
                  textButton={strings.getString('download_mp3')}
                  style={searchScreenStyles.buttonStyle}
                  isLoad={false}
                />
              </View>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
