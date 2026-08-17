import { StyleSheet, ViewStyle, ImageStyle, Dimensions, TextStyle } from 'react-native';

interface SearchScreenStyles {
  rootContainer: ViewStyle;
  topContainer: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  buttonDataContainer: ViewStyle;
  dataContainer: ViewStyle;
  buttonStyle: ViewStyle;
  searchButtonStyle: ViewStyle;
  pasteButtonContainerStyle: ViewStyle;
  pasteButtonStyle: ViewStyle;
  bottomContainer: ViewStyle;
  bannerAdvertising: ViewStyle;
  imageStyle: ImageStyle;
  textButtonStyle: TextStyle;
  textPasteButtonStyle: TextStyle;
  inputTextColor: TextStyle;
}

export const searchScreenStyles = StyleSheet.create<SearchScreenStyles>({
  rootContainer: {
    backgroundColor: '#0b1d4d',
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    marginTop: '12%',
    marginBottom: '5%',
  },
  inputContainer: {
    marginBottom: '10%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    width: Dimensions.get('window').width > 600 ? '75%' : '48%',
    height: 50,
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  inputTextColor: {
    color: '#605c5c',
  },
  dataContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').width > 600 ? -100 : 0,
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
    fontSize: Dimensions.get('window').width > 600 ? 19 : 15,
  },
  textPasteButtonStyle: {
    fontSize: Dimensions.get('window').width > 600 ? 15 : 13,
  },
  searchButtonStyle: {
    width: Dimensions.get('window').width > 600 ? 120 : 80,
  },
  pasteButtonContainerStyle: {
    width: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pasteButtonStyle: {
    width: Dimensions.get('window').width > 600 ? 110 : 70,
    height: 38,
    borderRadius: 10,
  },
  imageStyle: {
    width: Dimensions.get('window').width > 600 ? 160 : 120,
    height: Dimensions.get('window').width > 600 ? 280 : 180,
  },
  bottomContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerAdvertising: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
});
