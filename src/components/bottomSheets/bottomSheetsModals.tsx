import React, { FC } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { AboutScreenView } from '@screens/aboutScreen/aboutScreenView';
import { ContactsScreenView } from '@screens/contactsScreen/contactsScreenView';
import { PrivacyPolicyScreenView } from '@screens/privacyPolicyScreen/privacyPolicyScreenView';
import { TermsAndConditionComponent } from '@screens/termsAndConditionScreen/termsAndConditionsScreenView';
import { TextProps, TouchableOpacityProps } from 'react-native';

export type BottomSheetsModalsProps = {
  bottomSheetModalRef;
  snapPoints;
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
  actionTriggered: TextProps['children'];
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
      ) : actionTriggered === 'contacts' ? (
        <ContactsScreenView goToCloseBottomSheet={goToCloseBottomSheet} />
      ) : (
        <AboutScreenView goToCloseBottomSheet={goToCloseBottomSheet} />
      )}
    </BottomSheetModal>
  );
};
