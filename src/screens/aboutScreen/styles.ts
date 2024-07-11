import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type AboutScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const aboutScreenStyles = StyleSheet.create<AboutScreenStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
    paddingBottom: '15%',
  },
  centerContainer: {
    marginHorizontal: '3%',
    paddingBottom: '10%',
  },
});
