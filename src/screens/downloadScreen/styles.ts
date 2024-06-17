import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DownloadScreenStyles = {
  saveAriaView: ViewStyle;
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  imageContainer: ViewStyle;
  itemContainer: ViewStyle;
  titleContainer: ViewStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
  images: ImageStyle;
  title: TextStyle;
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
    width: '100%',
    flexDirection: 'column',
  },
  images: {
    height: 80,
    width: 80,
  },
  imageContainer: {
    marginLeft: '4%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    width: '50%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '2%',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  titleContainer: {
    width: 80,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    marginRight: '4%',
  },
  button: {
    borderRadius: 7,
  },
});
