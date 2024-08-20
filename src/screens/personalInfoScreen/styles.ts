import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type InfoScreenStylesProps = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  bottomContainer: ViewStyle;
  textDescriptionContainer: ViewStyle;
  textDescriptionStyle: TextStyle;
};

export const infoScreenStyles = StyleSheet.create<InfoScreenStylesProps>({
  rootContainer: {
    backgroundColor: '#1d014b',
    flex: 1,
    justifyContent: 'space-between',
  },
  centerContainer: {
    marginTop: '15%',
    height: Dimensions.get('window').width > 600 ? 240 : 180,
    marginHorizontal: '3%',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  textDescriptionContainer: {
    marginVertical: '5%',
  },
  textDescriptionStyle: {
    fontSize: Dimensions.get('window').width > 600 ? 20 : 16,
    lineHeight: Dimensions.get('window').width > 600 ? 24 : 18,
  },
});
