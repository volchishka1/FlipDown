import { TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { CloseWindowSvg } from '../../../assets/closeModalWindow';

export type CloseWindowComponentProps = {
  goToCloseBottomSheet: () => void;
};

export const CloseWindowComponent: FC<CloseWindowComponentProps> = (props) => {
  const { goToCloseBottomSheet } = props;
  return (
    <View>
      <TouchableOpacity accessibilityRole={'button'} onPress={goToCloseBottomSheet}>
        <CloseWindowSvg />
      </TouchableOpacity>
    </View>
  );
};
