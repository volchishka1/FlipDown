import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { BottomSheetsModals } from '../../components/bottomSheets/bottomSheetsModals';
import { LogoComponent } from '../../components/logoComponent/logoComponent';
import { TextComponent } from '../../components/textComponent/textComponent';

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
      <View style={infoScreenStyles.centerContainer}>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToTermsAndConditionalsModal}>
          <Text style={infoScreenStyles.textStyle}>{'Terms and conditions'}</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToPrivacyPolicyModal}>
          <Text style={infoScreenStyles.textStyle}>{'Privacy policy'}</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToContactsModal}>
          <Text style={infoScreenStyles.textStyle}>{'Contacts'}</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToAboutSheet}>
          <Text style={infoScreenStyles.textStyle}>{'About'}</Text>
        </TouchableOpacity>
      </View>
      <View style={infoScreenStyles.bottomContainer}>
        <LogoComponent />
        <View style={infoScreenStyles.textDescriptionContainer}>
          <TextComponent text={'© 2024 FlipTok. All rights reserved.'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
