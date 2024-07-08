import { StyleSheet, ViewStyle } from 'react-native';

export type FullScreenVideoStyles = {
  videoStyles: ViewStyle;
  closeWindowButtonStyle: ViewStyle;
  closeWindowStyle: ViewStyle;
  deleteItemStyle: ViewStyle;
};

export const fullScreenVideoStyles = StyleSheet.create<FullScreenVideoStyles>({
  videoStyles: {
    height: '100%',
    alignSelf: 'stretch',
  },
  closeWindowStyle: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 100,
  },
  deleteItemStyle: {
    position: 'absolute',
    top: 100,
    right: 20,
    zIndex: 100,
  },
  closeWindowButtonStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
