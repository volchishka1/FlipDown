import { TextInputProps, TextProps, TouchableOpacityProps } from 'react-native';

export type SearchScreenProps = {
  link: TextInputProps['children'];
  provider: TextProps['children'];
  bannerGoogleAdvId: TextProps['children'];
  bannerYandexAdvId: TextProps['children'];
  setInputValue: TouchableOpacityProps['onPress'];
  saveVideo: TouchableOpacityProps['onPress'];
  saveMusic: TouchableOpacityProps['onPress'];
  fetchCopiedText: TouchableOpacityProps['onPress'];
  setLink: TextInputProps['onChangeText'];
  preview: TextProps['children'];
  textInputColorText: TextInputProps['style'];
  isLoad: boolean;
  isLoadMusic: boolean;
  isLoadVideo: boolean;
  showLoad: boolean;
  showGradeModal: boolean;
};
