import { StyleSheet, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
};

export const downloadScreenStyles = StyleSheet.create<Styles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
});
