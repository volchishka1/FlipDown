import { FC, useMemo, useRef, useState } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { InfoScreenView } from './infoScreenView';
import { Alert, Linking } from 'react-native';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import { strings } from '@constants';

export type InfoScreenProps = {};
export const InfoScreen: FC<InfoScreenProps> = (props) => {
  const {} = props;
  const [actionTriggered, setActionTriggered] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['90%', '90%'], []);

  const internetState: NetInfoState = useNetInfo();

  const goToContactsModal = () => {
    bottomSheetModalRef.current?.present();
    setActionTriggered('contacts');
  };

  const goToAboutSheet = () => {
    bottomSheetModalRef.current?.present();
    setActionTriggered('about');
  };

  const goToCloseBottomSheet = () => {
    bottomSheetModalRef.current?.close();
  };

  const goToPrivacyPolicyLink = () => {
    if (internetState.isConnected === false) {
      Alert.alert(`${strings.getString('no_internet')}`, `${strings.getString('sorry')}`, [
        { text: `${strings.getString('okay')}` },
      ]);
    } else {
      Linking.openURL('https://fliptok.app/mobile-privacy-policy').catch((err) =>
        console.error('An error occurred', err),
      );
    }
  };
  const goToTermsAndConditionsLink = () => {
    if (internetState.isConnected === false) {
      Alert.alert(`${strings.getString('no_internet')}`, `${strings.getString('sorry')}`, [
        { text: `${strings.getString('okay')}` },
      ]);
    } else {
      Linking.openURL('https://fliptok.app/mobile-terms-and-conditions').catch((err) =>
        console.error('An error occurred', err),
      );
    }
  };

  return (
    <InfoScreenView
      bottomSheetModalRef={bottomSheetModalRef}
      snapPoints={snapPoints}
      actionTriggered={actionTriggered}
      goToContactsModal={goToContactsModal}
      goToCloseBottomSheet={goToCloseBottomSheet}
      goToAboutSheet={goToAboutSheet}
      goToPrivacyPolicyLink={goToPrivacyPolicyLink}
      goToTermsAndConditionsLink={goToTermsAndConditionsLink}
    />
  );
};
