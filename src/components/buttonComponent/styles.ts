import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface CustomButtonStylesProps {
  buttonStyle: ViewStyle;
  textButton: TextStyle;
}

export const customButtonStyles = StyleSheet.create<CustomButtonStylesProps>({
  buttonStyle: {
    width: 80,
    height: 50,
    backgroundColor: '#4a72dc',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
  },
});
