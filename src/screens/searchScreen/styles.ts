import { StyleSheet, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  buttonDataContainer: ViewStyle;
  dataContainer: ViewStyle;
  buttonStyle: ViewStyle;
};

export const searchScreenStyles = StyleSheet.create<Styles>({
  rootContainer: {
    backgroundColor: '#1d014b',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    width: '70%',
    height: 50,
    padding: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  dataContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '90%',
    justifyContent: 'space-around',
  },
  buttonDataContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    borderRadius: 7,
  },
});
