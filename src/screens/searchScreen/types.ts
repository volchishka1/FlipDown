import { TextInputProps, TextProps } from 'react-native';

export type SearchScreenProps = {
  link: TextProps['children'];
  provider: TextProps['children'];
  bannerGoogleAdvId: TextProps['children'];
  bannerYandexAdvId: TextProps['children'];
  setInputValue: TextInputProps['onChangeText'];
  saveVideo: TextInputProps['onChangeText'];
  saveMusic: TextInputProps['onChangeText'];
  setLink: TextInputProps['onChangeText'];
  preview: TextProps['children'];
  textInputColorText: TextInputProps['style'];
  isLoad: boolean;
  isLoadMusic: boolean;
  isLoadVideo: boolean;
  showLoad: boolean;
};
