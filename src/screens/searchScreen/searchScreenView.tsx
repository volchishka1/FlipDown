import { Image, TextInput, View } from 'react-native';

import React, { FC } from 'react';

import { CustomButton } from '../../components/buttonComponent/customButtonComponent';
import { LogoComponent } from '../../components/logoComponent/logoComponent';

import { searchScreenStyles } from './styles';
import { SearchScreenProps } from './types';

export const SearchScreenView: FC<SearchScreenProps> = (props) => {
  const {
    link = '',
    preview = '',
    setInputValue = () => {},
    saveMusic = () => {},
    saveVideo = () => {},
    setLink = () => {},
  } = props;
  return (
    <View style={searchScreenStyles.rootContainer}>
      <LogoComponent />
      <View style={searchScreenStyles.inputContainer}>
        <TextInput
          value={link}
          onChangeText={setLink}
          accessibilityLabel={'Text input field'}
          style={searchScreenStyles.input}
        />
        <CustomButton onPress={setInputValue} textButton={'Скачать'} />
      </View>
      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <View style={searchScreenStyles.dataContainer}>
          <Image style={{ height: 180, width: 100 }} source={{ uri: `${preview}` }} />
          <View style={searchScreenStyles.buttonDataContainer}>
            <CustomButton
              onPress={saveVideo}
              textButton={'Скачать видео'}
              style={searchScreenStyles.buttonStyle}
            />
            <CustomButton
              onPress={saveMusic}
              textButton={'Скачать mp3'}
              style={searchScreenStyles.buttonStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
