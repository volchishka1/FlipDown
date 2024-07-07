import { StyleSheet, ViewStyle } from 'react-native';

export type CloseWindowStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
};

export const closeWindowStyle = StyleSheet.create<CloseWindowStyle>({
  rootContainer: {
    alignItems: 'flex-end',
  },
  buttonStyle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#1d014b',
    opacity: 0.6,
  },
});
