import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DownloadScreenStyles = {
  saveAriaView: ViewStyle;
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  imageContainer: ViewStyle;
  itemContainer: ViewStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
  images: ImageStyle;
};

export const downloadScreenStyles = StyleSheet.create<DownloadScreenStyles>({
  saveAriaView: {
    backgroundColor: '#1d014b',
    flex: 1,
    justifyContent: 'center',
  },
  rootContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  centerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  images: {
    height: 160,
    width: 90,
    borderRadius: 10,
  },
  imageContainer: {},
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '2%',
    backgroundColor: 'grey',
    borderRadius: 10,
    width: 100,
    height: 170,
  },
  buttonContainer: {},
  button: {
    borderRadius: 7,
    height: 20,
  },
});
