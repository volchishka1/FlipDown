import { TextInputProps, TextProps } from 'react-native';

export type SearchScreenProps = {
  link: TextProps['children'];
  text: TextProps['children'];
  setInputValue: TextInputProps['onChangeText'];
  setLink: TextInputProps['onChangeText'];
};
