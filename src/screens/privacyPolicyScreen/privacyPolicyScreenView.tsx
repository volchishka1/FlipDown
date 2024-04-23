import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { CloseWindowComponent } from '../../components/closeWindowComponent/closeWindowComponent';

export type PrivacyPolicyScreenTypes = {
  goToCloseBottomSheet: () => void;
};

export const PrivacyPolicyScreenView: FC<PrivacyPolicyScreenTypes> = ({ goToCloseBottomSheet }) => {
  return (
    <View>
      <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      <Text>{'privacy Policy'}</Text>
    </View>
  );
};
