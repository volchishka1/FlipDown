import { FC } from 'react';
import { Modal, StatusBar, View } from 'react-native';
import { modalGradeComponentStyles } from '@components/modalGradeComponent/styles.ts';
import { CustomButton } from '@components/buttonComponent/CustomButtonComponent.tsx';
import StarRating from 'react-native-star-rating-widget';
import { strings } from '@constants';
import { ModalGradeComponentProps } from '@components/modalGradeComponent/types.ts';

export const ModalGradeComponentView: FC<ModalGradeComponentProps> = (props) => {
  const { closeTheModal, setStarRating, starRating } = props;

  return (
    <Modal transparent={true}>
      <StatusBar backgroundColor={'rgb(14,2,37)'} />
      <View style={modalGradeComponentStyles.modalContainer}>
        <View style={modalGradeComponentStyles.rootContainer}>
          <View style={modalGradeComponentStyles.starsContainer}>
            <StarRating rating={starRating} onChange={setStarRating} />
          </View>
          <CustomButton
            onPress={closeTheModal}
            textButton={`${strings.getString('rate_apps')}`}
            isLoad={false}
            style={modalGradeComponentStyles.buttonStyle}
            label={'Rate App'}
          />
        </View>
      </View>
    </Modal>
  );
};
