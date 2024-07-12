import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";

export type GlobalStyles = {
  tableContainer: ViewStyle;
  topContainer: ViewStyle;
  dotComponent: ViewStyle;
  descriptionUpdatedText: ViewStyle;
  descriptionText: TextStyle;
  footerDescriptionText: TextStyle;
  descriptionUnderlineText: TextStyle;
  boldText: TextStyle;
  boldTextWithMargin: TextStyle;
  paragraphName: TextStyle;
  headerName: TextStyle;
  headerNameTerms: TextStyle;
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
    height: Dimensions.get('window').width > 600 ? 80 : 70,
  },
  headerName: {
    fontFamily: 'Roboto-Bold',
    fontSize: Dimensions.get('window').width > 600 ? 30 : 22,
    marginTop: 10,
  },
  headerNameTerms: {
    fontSize: Dimensions.get('window').width > 600 ? 30 : 20,
  },
  boldText: {
    fontSize: Dimensions.get('window').width > 600 ? 18 : 14,
    fontFamily: 'Roboto-Bold',
  },
  boldTextWithMargin: {
    fontFamily: 'Roboto-Bold',
    fontSize: Dimensions.get('window').width > 600 ? 18 : 14,
    marginBottom: Dimensions.get('window').width > 600 ? 14 : 10,
  },
  boldUnderlineText: {
    fontSize: Dimensions.get('window').width > 600 ? 18 : 14,
    fontFamily: 'Roboto-Bold',
    textDecorationLine: 'underline',
  },
  paragraphName: {
    fontFamily: 'Roboto-Bold',
    fontSize: Dimensions.get('window').width > 600 ? 24 : 22,
  },
  tableContainer: {
    marginBottom: 10,
  },
  descriptionText: {
    lineHeight: Dimensions.get('window').width > 600 ? 22 : 18,
    fontSize: Dimensions.get('window').width > 600 ? 18 : 14,
    marginBottom: 10,
  },
  descriptionUnderlineText: {
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  paragraphDescriptionName: {
    fontFamily: 'Roboto-Bold',
    fontSize: Dimensions.get('window').width > 600 ? 22 : 16,
  },
  paragraphDescriptionNameBold: {
    marginBottom: 10,
    fontSize: Dimensions.get('window').width > 600 ? 18 : 16,
    fontFamily: 'Roboto-Bold',
  },
  descriptionUpdatedText: {
    marginBottom: 40,
  },
  dotComponent: {
    marginBottom: 10,
  },
  footerDescriptionText: {
    lineHeight: Dimensions.get('window').width > 600 ? 22 : 18,
    fontSize: Dimensions.get('window').width > 600 ? 18 : 14,
    marginBottom: '40%',
  }
});

export const textColorBlackStyles = {
  color: '#000000',
};
