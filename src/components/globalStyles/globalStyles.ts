import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type GlobalStyles = {
  tableContainer: ViewStyle;
  topContainer: ViewStyle;
  dotComponent: ViewStyle;
  descriptionUpdatedText: ViewStyle;
  descriptionText: ViewStyle;
  descriptionUnderlineText: TextStyle;
  boldText: TextStyle;
  boldTextWithMargin: TextStyle;
  paragraphName: TextStyle;
  headerName: TextStyle;
  paragraphDescriptionName: TextStyle;
  paragraphDescriptionNameBold: TextStyle;
  boldUnderlineText: TextStyle;
};

export const globalStyles = StyleSheet.create<GlobalStyles>({
  topContainer: {
    marginHorizontal: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerName: {
    marginTop: 10,
  },
  boldText: {
    fontFamily: 'Roboto-Bold',
  },
  boldTextWithMargin: {
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
  },
  boldUnderlineText: {
    fontFamily: 'Roboto-Bold',
    textDecorationLine: 'underline',
  },
  paragraphName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  tableContainer: {
    marginBottom: 10,
  },
  descriptionText: {
    marginBottom: 10,
  },
  descriptionUnderlineText: {
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  paragraphDescriptionName: {
    fontSize: 16,
  },
  paragraphDescriptionNameBold: {
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  descriptionUpdatedText: {
    marginBottom: 40,
  },
  dotComponent: {
    marginBottom: 10,
  },
});
