import { InfoScreenView } from './InfoScreenView.tsx';
import { Alert, Linking } from 'react-native';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import { ROUTES, strings } from '@constants';
import { FC } from 'react';

type InfoScreenComponentProps = {
  navigation: any;
};

export const InfoScreen: FC<InfoScreenComponentProps> = ({ navigation }) => {
  const internetState: NetInfoState = useNetInfo();

  const goToAbout = () => {
    navigation.navigate(ROUTES.ABOUT_SCREEN);
  };

  const goToContacts = () => {
    navigation.navigate(ROUTES.CONTACTS_SCREEN);
  };

  const goToPrivacyPolicy = () => {
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
  const goToTermsAndConditions = () => {
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
      goToContacts={goToContacts}
      goToAbout={goToAbout}
      goToPrivacyPolicy={goToPrivacyPolicy}
      goToTermsAndConditions={goToTermsAndConditions}
    />
  );
};
