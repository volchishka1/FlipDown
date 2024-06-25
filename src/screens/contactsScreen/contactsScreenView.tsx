import { SafeAreaView, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '../../components/closeWindowComponent/closeWindowComponent';
import { ParagraphComponent } from '../../components/textComponent/paragraphComponent';
import { TextComponent } from '../../components/textComponent/textComponent';

import { contactScreenStyles } from './styles';
import { globalStyles } from '../../components/globalStyles/globalStyles';

export type ContactsScreenProps = {
  goToCloseBottomSheet: () => void;
};
export const ContactsScreenView: FC<ContactsScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <SafeAreaView style={contactScreenStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent style={globalStyles.headerName} paragraphName={'Contact us'} />
        <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      </View>
      <ScrollView style={contactScreenStyles.centerContainer}>
        <TextComponent text={'You can contact us using the following contact data:'} />
        <TextComponent text={'Email: fliptokapp@gmail.com'} />
        <TextComponent
          text={
            'If you have questions, suggestions or comments, please do not hesitate to contact us. We are always ready to help you and answer all your questions.'
          }
        />
        <TextComponent
          text={
            'We value your attention to our site and are always ready to help you. Regardless of questions or requests, you can be sure that you will receive our professional and friendly support.'
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
