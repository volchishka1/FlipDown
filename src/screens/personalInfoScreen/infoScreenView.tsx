import { SafeAreaView, View } from 'react-native';

import React, { FC } from 'react';

import { BottomSheetsModals } from '@components/bottomSheets/bottomSheetsModals';
import { LogoComponent } from '@components/logoComponent/logoComponent';
import { TextComponent } from '@components/textComponent/textComponent';

import { infoScreenStyles } from './styles';
import { InfoScreenViewProps } from './types';
import { BottomSheetButtonComponent } from '@components/bottomSheetButtonComponent/bottomSheetButtonComponent.tsx';

export const InfoScreenView: FC<InfoScreenViewProps> = (props) => {
  const {
    bottomSheetModalRef,
    snapPoints,
    actionTriggered,
    goToContactsModal = () => {},
    goToCloseBottomSheet = () => {},
    goToAboutSheet = () => {},
    goToTermsAndConditionsLink = () => {},
    goToPrivacyPolicyLink = () => {},
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
        <BottomSheetButtonComponent onPress={goToAboutSheet} textString={'about'} />
        <BottomSheetButtonComponent onPress={goToContactsModal} textString={'contacts'} />
        <BottomSheetButtonComponent
          onPress={goToTermsAndConditionsLink}
          textString={'terms_and_conditions'}
        />
        <BottomSheetButtonComponent onPress={goToPrivacyPolicyLink} textString={'privacy_policy'} />
      </View>
      <View style={infoScreenStyles.bottomContainer}>
        <LogoComponent />
        <View style={infoScreenStyles.textDescriptionContainer}>
          <TextComponent
            textStyles={infoScreenStyles.textDescriptionStyle}
            text={'© 2024 FlipTok. All rights reserved.'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
