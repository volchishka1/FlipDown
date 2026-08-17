import { StyleSheet, ViewStyle } from 'react-native';

interface ContactScreenStyles {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
}

export const contactScreenStyles = StyleSheet.create<ContactScreenStyles>({
  rootContainer: {
    backgroundColor: '#0b1d4d',
    flex: 1,
    paddingVertical: '15%',
  },
  centerContainer: {
    marginHorizontal: '3%',
    marginBottom: '10%',
  },
});
