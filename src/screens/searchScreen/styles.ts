import { StyleSheet, ViewStyle, ImageStyle, Dimensions, TextStyle } from "react-native";

export type Styles = {
  rootContainer: ViewStyle;
  topContainer: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  buttonDataContainer: ViewStyle;
  dataContainer: ViewStyle;
  buttonStyle: ViewStyle;
  searchButtonStyle: ViewStyle;
  bottomContainer: ViewStyle;
  imageStyle: ImageStyle;
  textButtonStyle: TextStyle;
};

export const searchScreenStyles = StyleSheet.create<Styles>({
  rootContainer: {
    backgroundColor: '#1d014b',
    flex: 1,
    justifyContent: 'center',
  },
  topContainer: {
    marginBottom: '20%',
  },
  inputContainer: {
    marginBottom: '10%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    width: Dimensions.get('window').width > 600 ? '75%' : '70%',
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
    width: 120,
  },
  textButtonStyle: {
    fontSize: Dimensions.get('window').width > 600 ? 18 : 12,
  },
  searchButtonStyle: {
    width: Dimensions.get('window').width > 600 ? 120 : 80,
  },
  imageStyle: {
    width: 120,
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
