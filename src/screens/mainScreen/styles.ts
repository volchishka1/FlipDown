import { StyleSheet, ViewStyle } from 'react-native';

type MainScreenStyles = {
  rootContainer: ViewStyle;
};

export const mainScreenStyles = StyleSheet.create<MainScreenStyles>({
  rootContainer: {
    height: '100%',
    backgroundColor: '#1d014b',
  },
});
