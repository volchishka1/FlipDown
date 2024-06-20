import { View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '../../components/closeWindowComponent/closeWindowComponent';
import { ParagraphComponent } from '../../components/textComponent/paragraphComponent';
import { TextComponent } from '../../components/textComponent/textComponent';

import { contactScreenStyles } from './styles';

export type ContactsScreenProps = {
  goToCloseBottomSheet: () => void;
};
export const ContactsScreenView: FC<ContactsScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <View style={contactScreenStyles.rootContainer}>
      <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      <ScrollView style={contactScreenStyles.centerContainer}>
        <ParagraphComponent paragraphName={'Contact us'} />
        <TextComponent
          text={
            'You can contact us using the following contact data:\n' +
            '\n' +
            'Email: fliptokapp@gmail.com\n' +
            '\n' +
            'If you have questions, suggestions or comments, please do not hesitate to contact us. We are always ready to help you and answer all your questions.\n' +
            '\n' +
            'We value your attention to our site and are always ready to help you. Regardless of questions or requests, you can be sure that you will receive our professional and friendly support.'
          }
        />
      </ScrollView>
    </View>
  );
};
