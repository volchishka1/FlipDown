import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  buttonStyle: ViewStyle;
  textInput: TextStyle;
};

export const searchScreenStyles = StyleSheet.create<Styles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  buttonStyle: {
    width: 80,
    height: 50,
    backgroundColor: '#be54ff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
  },
  textInput: {
    color: 'white',
  },
});
