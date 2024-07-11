import { Dimensions, StyleSheet, ViewStyle } from "react-native";

export type CloseWindowStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
};

export const closeWindowStyle = StyleSheet.create<CloseWindowStyle>({
  rootContainer: {
    alignItems: 'flex-end',
  },
  buttonStyle: {
    width: Dimensions.get('window').width > 600 ? 50 : 35,
    height: Dimensions.get('window').width > 600 ? 50 : 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Dimensions.get('window').width > 600 ? 25 : 20,
    backgroundColor: '#1d014b',
    opacity: 0.6,
  },
});
