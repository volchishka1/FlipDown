import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";

export type Styles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  bottomContainer: ViewStyle;
  textStyle: TextStyle;
  textDescriptionContainer: ViewStyle;
  textDescriptionStyle: TextStyle;
};

export const infoScreenStyles = StyleSheet.create<Styles>({
  rootContainer: {
    backgroundColor: '#1d014b',
    flex: 1,
    justifyContent: 'space-between',
  },
  centerContainer: {
    justifyContent: 'space-between',
    marginTop: '15%',
    height: Dimensions.get('window').width > 600 ? 240 : 180,
    marginHorizontal: '3%',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  textDescriptionContainer: {
    marginVertical: '5%',
  },
  textDescriptionStyle: {
    fontSize: Dimensions.get('window').width > 600 ? 20 : 16,
    lineHeight: Dimensions.get('window').width > 600 ? 24 : 18
  },
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
    fontSize: Dimensions.get('window').width > 600 ? 30 : 22,
    lineHeight: 40,
  },
});
