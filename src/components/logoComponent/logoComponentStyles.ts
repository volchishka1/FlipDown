import { StyleSheet, ViewStyle } from 'react-native';

export type LogoComponentStyles = {
  centerContainer: ViewStyle;
};

export const logoComponentStyles = StyleSheet.create<LogoComponentStyles>({
  centerContainer: {
    marginVertical: '30%',
    alignItems: 'center',
    borderRadius: 100,
  },
});
