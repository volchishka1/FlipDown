import { Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DownloadScreenStyles = {
  saveAriaView: ViewStyle;
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  imageContainer: ViewStyle;
  textEmptyScreenContainer: ViewStyle;
  textEmptyScreen: TextStyle;
  button: ViewStyle;
  images: ImageStyle;
  videoStyle: ViewStyle;
};

export const downloadScreenStyles = StyleSheet.create<DownloadScreenStyles>({
  videoContainer: {},
  videoStyle: {
    height: '100%',
    alignSelf: 'stretch',
  },
  saveAriaView: {
    backgroundColor: '#1d014b',
    flex: 1,
    justifyContent: 'center',
  },
  rootContainer: {
    marginHorizontal: 1,
  },
  centerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  textEmptyScreenContainer: {
    alignItems: 'center',
  },
  textEmptyScreen: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: Dimensions.get('window').width > 600 ? 30 : 20,
  },
  images: {
    height: Dimensions.get('window').width > 600 ? 320 : 180,
    width: '100%',
  },
  imageContainer: {
    margin: Dimensions.get('window').width > 600 ? 2 : 1,
    borderRadius: 10,
    width: '32.6%',
    height: Dimensions.get('window').width > 600 ? 320 : 180,
  },
  button: {
    borderRadius: 7,
    height: 20,
  },
});
