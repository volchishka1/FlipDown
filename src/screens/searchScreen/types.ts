import { TextInputProps, TextProps } from 'react-native';

export type SearchScreenProps = {
  link: TextProps['children'];
  setInputValue: TextInputProps['onChangeText'];
};
