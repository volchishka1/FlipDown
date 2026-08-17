import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types.ts';
import { ROUTES } from '@constants';
import { AboutScreenView } from '@screens/aboutScreen/AboutScreenView.tsx';
import { FC } from 'react';

export type AboutScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.ABOUT_SCREEN>,
  any
>;

export const AboutScreen: FC<AboutScreenComponentProps> = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return <AboutScreenView goBack={goBack} />;
};
