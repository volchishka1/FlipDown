import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type AboutScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const aboutScreenStyles = StyleSheet.create<AboutScreenStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
    marginBottom: 10,
  },
  centerContainer: {
    marginHorizontal: '3%',
    marginBottom: '10%',
  },
});
