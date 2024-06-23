import { StyleSheet, ViewStyle } from 'react-native';

export type DotComponentStyles = {
  rootContainer: ViewStyle;
  dot: ViewStyle;
};

export const dotComponentStyles = StyleSheet.create<DotComponentStyles>({
  rootContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    backgroundColor: 'green',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});
