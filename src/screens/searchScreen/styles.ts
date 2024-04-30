import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  buttonDataContainer: ViewStyle;
  dataContainer: ViewStyle;
  buttonStyle: ViewStyle;
  bottomContainer: ViewStyle;
  imageStyle: ImageStyle;
};

export const searchScreenStyles = StyleSheet.create<Styles>({
  rootContainer: {
    backgroundColor: '#1d014b',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    width: '70%',
    height: 50,
    padding: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  dataContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
  buttonDataContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    borderRadius: 7,
  },
  imageStyle: {
    width: 100,
    height: 180,
  },
  bottomContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
