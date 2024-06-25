import { Image, SafeAreaView, TextInput, View } from 'react-native';

import React, { FC } from 'react';

import { CustomButton } from '../../components/buttonComponent/customButtonComponent';
import { LogoComponent } from '../../components/logoComponent/logoComponent';

import { searchScreenStyles } from './styles';
import { SearchScreenProps } from './types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
      <KeyboardAwareScrollView scrollEnabled={false} style={{ marginTop: '30%' }}>
        <View style={searchScreenStyles.topContainer}>
          <LogoComponent />
        </View>
        <View style={searchScreenStyles.inputContainer}>
          <TextInput
            value={link}
            onChangeText={setLink}
            accessibilityLabel={'Text input field'}
            style={searchScreenStyles.input}
          />
          <CustomButton onPress={setInputValue} textButton={'Download'} isLoad={isLoad} />
        </View>
        <View style={searchScreenStyles.bottomContainer}>
          {showLoad && (
            <View style={searchScreenStyles.dataContainer}>
              <Image style={searchScreenStyles.imageStyle} source={{ uri: `${preview}` }} />
              <View style={searchScreenStyles.buttonDataContainer}>
                <CustomButton
                  onPress={saveVideo}
                  textButton={'Download video'}
                  style={searchScreenStyles.buttonStyle}
                  isLoad={false}
                />
                <CustomButton
                  onPress={saveMusic}
                  textButton={'Download mp3'}
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
