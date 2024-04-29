import { TextInputProps, TextProps } from 'react-native';

export type SearchScreenProps = {
  link: TextProps['children'];
  setInputValue: TextInputProps['onChangeText'];
  saveVideo: TextInputProps['onChangeText'];
  saveMusic: TextInputProps['onChangeText'];
  setLink: TextInputProps['onChangeText'];
  preview: TextProps['children'];
};
