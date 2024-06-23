import { StyleSheet, ViewStyle } from 'react-native';

export type CloseWindowStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
};

export const closeWindowStyle = StyleSheet.create<CloseWindowStyle>({
  rootContainer: {
    marginTop: '3%',
    marginRight: '3%',
    alignItems: 'flex-end',
  },
  buttonStyle: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#1d014b',
    opacity: 0.6,
  },
});
