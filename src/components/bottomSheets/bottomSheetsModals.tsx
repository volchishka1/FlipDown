import React, { FC } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { AboutScreenView } from '@screens/aboutScreen/aboutScreenView';
import { ContactsScreenView } from '@screens/contactsScreen/contactsScreenView';
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
      {actionTriggered === 'contacts' ? (
        <ContactsScreenView goToCloseBottomSheet={goToCloseBottomSheet} />
      ) : (
        <AboutScreenView goToCloseBottomSheet={goToCloseBottomSheet} />
      )}
    </BottomSheetModal>
  );
};
