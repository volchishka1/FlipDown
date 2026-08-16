import { StyleSheet, ViewStyle } from 'react-native';

export type AboutScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const aboutScreenStyles = StyleSheet.create<AboutScreenStyles>({
  rootContainer: {
    backgroundColor: '#0b1d4d',
    paddingVertical: '15%',
  },
  centerContainer: {
    marginHorizontal: '3%',
    paddingBottom: '10%',
  },
});
