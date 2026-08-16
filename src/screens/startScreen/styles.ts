import { StyleSheet, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const startScreenStyles = StyleSheet.create<Styles>({
  rootContainer: { height: '100%', backgroundColor: '#1d014b' },
  centerContainer: {
    top: '24%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
});
