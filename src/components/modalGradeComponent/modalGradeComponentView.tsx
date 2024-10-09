import React, { FC } from 'react';
import { Modal, StatusBar, TouchableOpacityProps, View } from 'react-native';
import { modalGradeComponentStyles } from '@components/modalGradeComponent/styles.ts';
import { CustomButton } from '@components/buttonComponent/customButtonComponent.tsx';
import StarRating from 'react-native-star-rating-widget';

export type ModalGradeComponentProps = {
  closeTheModal: TouchableOpacityProps['onPress'];
  setStarRating: (arg: number) => void;
  starRating: number;
};

export const ModalGradeComponentView: FC<ModalGradeComponentProps> = (props) => {
  const { closeTheModal, setStarRating, starRating } = props;

  return (
    <Modal transparent={true}>
      <StatusBar backgroundColor={'rgb(14,2,37)'} />
      <View style={modalGradeComponentStyles.modalContainer}>
        <View style={modalGradeComponentStyles.rootContainer}>
          <View style={modalGradeComponentStyles.starsContainer}>
            <StarRating rating={starRating} onChange={setStarRating} enableHalfStar={false} />
          </View>
          <CustomButton
            onPress={closeTheModal}
            textButton={'Оценить приложение'}
            isLoad={false}
            style={modalGradeComponentStyles.buttonStyle}
          />
        </View>
      </View>
    </Modal>
  );
};
