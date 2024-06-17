import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { BottomSheetsModals } from '../../components/bottomSheets/bottomSheetsModals';

import { infoScreenStyles } from './styles';
import { InfoScreenViewProps } from './types';

export const InfoScreenView: FC<InfoScreenViewProps> = (props) => {
  const {
    bottomSheetModalRef,
    snapPoints,
    actionTriggered,
    goToTermsAndConditionalsModal = () => {},
    goToPrivacyPolicyModal = () => {},
    goToContactsModal = () => {},
    goToCloseBottomSheet = () => {},
    goToAboutSheet = () => {},
  } = props;

  return (
    <SafeAreaView style={infoScreenStyles.rootContainer}>
      <BottomSheetsModals
        actionTriggered={actionTriggered}
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        goToCloseBottomSheet={goToCloseBottomSheet}
      />
      <View>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToTermsAndConditionalsModal}>
          <Text style={{ color: 'white' }}>{'Terms and conditions'}</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToPrivacyPolicyModal}>
          <Text style={{ color: 'white' }}>{'Privacy policy'}</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToContactsModal}>
          <Text style={{ color: 'white' }}>{'Contacts'}</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToAboutSheet}>
          <Text style={{ color: 'white' }}>{'About'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
