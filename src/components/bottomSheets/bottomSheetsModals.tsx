import React, { FC } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { ContactsScreenView } from '../../screens/contactsScreen/contactsScreenView';
import { PrivacyPolicyScreenView } from '../../screens/privacyPolicyScreen/privacyPolicyScreenView';
import { TermsAndConditionComponent } from '../../screens/termsAndConditionScreen/termsAndConditionsScreenView';

export type BottomSheetsModalsProps = {
  bottomSheetModalRef;
  snapPoints;
  goToCloseBottomSheet: () => void;
  actionTriggered: string;
};

export const BottomSheetsModals: FC<BottomSheetsModalsProps> = (props) => {
  const {
    bottomSheetModalRef,
    snapPoints,
    goToCloseBottomSheet = () => {},
    actionTriggered,
  } = props;
  return (
    <BottomSheetModal
      handleComponent={null}
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      {actionTriggered === 'termsAndConditionals' ? (
        <TermsAndConditionComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      ) : actionTriggered === 'privacyPolicy' ? (
        <PrivacyPolicyScreenView goToCloseBottomSheet={goToCloseBottomSheet} />
      ) : (
        <ContactsScreenView goToCloseBottomSheet={goToCloseBottomSheet} />
      )}
    </BottomSheetModal>
  );
};
