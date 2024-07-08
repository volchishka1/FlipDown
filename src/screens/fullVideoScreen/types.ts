import { ButtonProps, TextProps } from 'react-native';

export type FullVideoScreenViewProps = {
  url: TextProps['children'];
  backToDownloadStackScreen: ButtonProps['onPress'];
  deleteFile: ButtonProps['onPress'];
};
