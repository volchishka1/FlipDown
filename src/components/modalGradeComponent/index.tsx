import { ModalGradeComponentView } from '@components/modalGradeComponent/modalGradeComponentView.tsx';
import { useAppDispatch } from '@root/hooks/hooks.ts';
import { setShowGradeModal } from '@root/store/actions.ts';
import { Alert } from 'react-native';
import { useState } from 'react';

export const ModalGradeComponent = () => {
  const dispatch = useAppDispatch();
  const [starRating, setStarRating] = useState(0);
  const closeTheModal = () => {
    dispatch(setShowGradeModal(false));
    starRating >= 3 ? Alert.alert('Спасибо за оценку') : Alert.alert('Идите в сраку');
  };
  return (
    <ModalGradeComponentView
      closeTheModal={closeTheModal}
      setStarRating={setStarRating}
      starRating={starRating}
    />
  );
};
