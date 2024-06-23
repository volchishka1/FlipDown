import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type CustomButtonStylesProps = {
  buttonStyle: ViewStyle;
  textButton: TextStyle;
};

export const customButtonStyles = StyleSheet.create<CustomButtonStylesProps>({
  buttonStyle: {
    width: 80,
    height: 50,
    backgroundColor: '#be54ff',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Roboto-Medium',
    color: 'white',
  },
});
