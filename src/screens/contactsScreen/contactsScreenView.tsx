import { SafeAreaView, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';
import { ParagraphComponent } from '@components/textComponent/paragraphComponent';
import { TextComponent } from '@components/textComponent/textComponent';

import { contactScreenStyles } from './styles';
import { globalStyles } from '@components/globalStyles/globalStyles';
import { strings } from "@constants";

export type ContactsScreenProps = {
  goToCloseBottomSheet: () => void;
};
export const ContactsScreenView: FC<ContactsScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <SafeAreaView style={contactScreenStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent style={globalStyles.headerName} paragraphName={strings.getString('contact_us')} />
        <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      </View>
      <ScrollView style={contactScreenStyles.centerContainer}>
        <TextComponent text={strings.getString('you_can_contact_us')} />
        <TextComponent text={strings.getString('email')} />
        <TextComponent
          text={
            strings.getString('if_you_have_questions')
          }
        />
        <TextComponent
          text={
            strings.getString('we_value_your_attention')
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
