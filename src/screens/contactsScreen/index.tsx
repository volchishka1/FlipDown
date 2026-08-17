import { FC } from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types.ts';
import { ROUTES } from '@constants';
import { ContactsScreenView } from '@screens/contactsScreen/ContactsScreenView.tsx';

export type ContactsScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.CONTACTS_SCREEN>,
  any
>;
export const ContactsScreen: FC<ContactsScreenComponentProps> = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return <ContactsScreenView goBack={goBack} />;
};
