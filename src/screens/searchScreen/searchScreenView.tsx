import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { LogoComponent } from '../../components/logoComponent/logoComponent';

import { searchScreenStyles } from './styles';
import { SearchScreenProps } from './types';

export const SearchScreenView: FC<SearchScreenProps> = (props) => {
  const { text = '', link = '', setInputValue = () => {}, setLink = () => {} } = props;
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
        <TouchableOpacity
          style={searchScreenStyles.buttonStyle}
          accessibilityLabel={'button'}
          onPress={setInputValue}
        >
          <Text style={searchScreenStyles.textInput}>{'Скачать'}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 30,
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'black', marginHorizontal: '10%' }}>{text}</Text>
      </View>
    </View>
  );
};
