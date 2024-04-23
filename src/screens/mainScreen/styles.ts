import { StyleSheet, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
};

export const mainScreenStyles = StyleSheet.create<Styles>({
  rootContainer: { height: '100%', backgroundColor: '#1d014b' },
});
