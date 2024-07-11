import { StyleSheet, ViewStyle } from 'react-native';

export type PrivacyPolicyScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const privacyPolicyScreenStyles = StyleSheet.create<PrivacyPolicyScreenStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
    paddingBottom: 20,
  },
  centerContainer: {
    marginHorizontal: '3%',
    paddingBottom: '10%',
  },
});
