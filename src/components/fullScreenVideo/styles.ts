import { StyleSheet, ViewStyle } from 'react-native';

export type FullScreenVideoStyles = {
  videoStyles: ViewStyle;
};

export const fullScreenVideoStyles = StyleSheet.create<FullScreenVideoStyles>({
  videoStyles: {
    height: '100%',
    alignSelf: 'stretch',
  },
});
