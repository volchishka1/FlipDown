import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { CloseWindowComponent } from '../../components/closeWindowComponent/closeWindowComponent';

export type TermsAndConditionsTypes = {
  goToCloseBottomSheet: () => void;
};

export const TermsAndConditionComponent: FC<TermsAndConditionsTypes> = ({
  goToCloseBottomSheet,
}) => {
  return (
    <View>
      <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      <Text>{'termsAndConditions'}</Text>
    </View>
  );
};
