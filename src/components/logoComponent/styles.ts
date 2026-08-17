import { StyleSheet, ViewStyle } from 'react-native';

type LogoComponentStyles = {
  centerContainer: ViewStyle;
};

export const logoComponentStyles = StyleSheet.create<LogoComponentStyles>({
  centerContainer: {
    alignItems: 'center',
    borderRadius: 100,
  },
});
