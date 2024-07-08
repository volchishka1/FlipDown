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

export const SearchScreenView: FC<SearchScreenProps> = (props) => {
  const {
    link = '',
    preview = '',
    setInputValue = () => {},
    saveMusic = () => {},
    saveVideo = () => {},
    setLink = () => {},
    isLoad = false,
    isLoadMusic = false,
    isLoadVideo = false,
    showLoad = false,
    textInputColorText,
  } = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={searchScreenStyles.rootContainer}>
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
