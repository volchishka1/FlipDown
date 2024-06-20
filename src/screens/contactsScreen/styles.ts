import { StyleSheet, ViewStyle } from 'react-native';

export type ContactScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const contactScreenStyles = StyleSheet.create<ContactScreenStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
    flex: 1,
  },
  centerContainer: {
    marginHorizontal: '3%',
    marginBottom: '10%',
  },
});
