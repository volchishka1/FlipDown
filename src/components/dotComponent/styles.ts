import { StyleSheet, ViewStyle } from 'react-native';

interface DotComponentStyles {
  rootContainer: ViewStyle;
  textContainer: ViewStyle;
  dot: ViewStyle;
}

export const dotComponentStyles = StyleSheet.create<DotComponentStyles>({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2%',
  },
  dot: {
    marginRight: 10,
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  textContainer: {
    marginHorizontal: '3%',
  },
});
