import { Dimensions, StyleSheet, TextStyle } from 'react-native';

export type BottomSheetButtonStylesProps = {
  textStyle: TextStyle;
};

export const bottomSheetButtonStyles = StyleSheet.create<BottomSheetButtonStylesProps>({
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
    fontSize: Dimensions.get('window').width > 600 ? 30 : 22,
    lineHeight: 45,
  },
});
