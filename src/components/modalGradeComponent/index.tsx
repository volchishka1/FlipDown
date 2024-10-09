import { ModalGradeComponentView } from '@components/modalGradeComponent/modalGradeComponentView.tsx';
import { useAppDispatch } from '@root/hooks/hooks.ts';
import { setShowGradeModal } from '@root/store/actions.ts';
import { Alert } from 'react-native';
import { useState } from 'react';
import { strings } from '@constants';

export const ModalGradeComponent = () => {
  const dispatch = useAppDispatch();
  const [starRating, setStarRating] = useState(0);
  const closeTheModal = () => {
    dispatch(setShowGradeModal(false));
    starRating <= 3 ? Alert.alert(`${strings.getString('thanks_for_rate')}`) : null;
  };
  return (
    <ModalGradeComponentView
      closeTheModal={closeTheModal}
      setStarRating={setStarRating}
      starRating={starRating}
    />
  );
};
