import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { CloseWindowComponent } from '../../components/closeWindowComponent/closeWindowComponent';

export type ContactsScreenProps = {
  goToCloseBottomSheet: () => void;
};
export const ContactsScreenView: FC<ContactsScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <View>
      <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      <Text>{'Contacts'}</Text>
    </View>
  );
};
