import { StyleSheet, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
};

export const infoScreenStyles = StyleSheet.create<Styles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
});
