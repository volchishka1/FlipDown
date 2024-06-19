import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  textStyle: TextStyle;
};

export const infoScreenStyles = StyleSheet.create<Styles>({
  rootContainer: {
    backgroundColor: '#1d014b',
    flex: 1,
  },
  centerContainer: {
    justifyContent: 'space-between',
    marginTop: '15%',
    height: '25%',
    marginHorizontal: '3%',
  },
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
    fontSize: 20,
  },
});
