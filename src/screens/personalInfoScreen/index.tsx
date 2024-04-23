import { FC, useMemo, useRef, useState } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { InfoScreenView } from './infoScreenView';

export type InfoScreenProps = {};
export const InfoScreen: FC<InfoScreenProps> = (props) => {
  const {} = props;
  const [actionTriggered, setActionTriggered] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['90%', '90%'], []);
  const goToPrivacyPolicyModal = () => {
    bottomSheetModalRef.current?.present();
    setActionTriggered('privacyPolicy');
  };
  const goToTermsAndConditionalsModal = () => {
    bottomSheetModalRef.current?.present();
    setActionTriggered('termsAndConditionals');
  };
  const goToContactsModal = () => {
    bottomSheetModalRef.current?.present();
    setActionTriggered('contacts');
  };

  const goToCloseBottomSheet = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <InfoScreenView
      bottomSheetModalRef={bottomSheetModalRef}
      snapPoints={snapPoints}
      actionTriggered={actionTriggered}
      goToPrivacyPolicyModal={goToPrivacyPolicyModal}
      goToTermsAndConditionalsModal={goToTermsAndConditionalsModal}
      goToContactsModal={goToContactsModal}
      goToCloseBottomSheet={goToCloseBottomSheet}
    />
  );
};
