import { StyleSheet, ViewStyle } from 'react-native';

export type ModalGradeComponentStyles = {
  modalContainer: ViewStyle;
  rootContainer: ViewStyle;
  starsContainer: ViewStyle;
  buttonStyle: ViewStyle;
};

export const modalGradeComponentStyles = StyleSheet.create<ModalGradeComponentStyles>({
  modalContainer: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '20%',
    backgroundColor: '#1d014b',
    borderRadius: 10,
  },
  starsContainer: {
    width: '80%',
    height: '30%',
    borderRadius: 10,
    marginBottom: '8%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '60%',
    height: '25%',
    borderRadius: 10,
  },
});
