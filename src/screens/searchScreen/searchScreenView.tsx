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
    isLoad = false,
    showLoad = false,
    // hasPermission = false,
  } = props;
  return (
    <View style={searchScreenStyles.rootContainer}>
      {/*{hasPermission ? Alert.alert('Granted ✅') : Alert.alert('Denied ❌')}*/}
      <LogoComponent />
      <View style={searchScreenStyles.inputContainer}>
        <TextInput
          value={link}
          onChangeText={setLink}
          accessibilityLabel={'Text input field'}
          style={searchScreenStyles.input}
        />
        <CustomButton onPress={setInputValue} textButton={'Скачать'} isLoad={isLoad} />
      </View>
      <View style={searchScreenStyles.bottomContainer}>
        {showLoad && (
          <View style={searchScreenStyles.dataContainer}>
            <Image style={searchScreenStyles.imageStyle} source={{ uri: `${preview}` }} />
            <View style={searchScreenStyles.buttonDataContainer}>
              <CustomButton
                onPress={saveVideo}
                textButton={'Скачать видео'}
                style={searchScreenStyles.buttonStyle}
                isLoad={false}
              />
              <CustomButton
                onPress={saveMusic}
                textButton={'Скачать mp3'}
                style={searchScreenStyles.buttonStyle}
                isLoad={false}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
