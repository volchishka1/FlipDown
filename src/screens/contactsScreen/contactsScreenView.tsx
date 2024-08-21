import { SafeAreaView, TouchableOpacityProps, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';
import { ParagraphComponent } from '@components/textComponent/paragraphComponent';
import { TextComponent } from '@components/textComponent/textComponent';

import { contactScreenStyles } from './styles';
import { globalStyles } from '@components/globalStyles/globalStyles';
import { strings } from '@constants';
import { CloseWindowSvg } from '@assets/closeModalWindow';

export type ContactsScreenProps = {
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
};

export const ContactsScreenView: FC<ContactsScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <SafeAreaView style={contactScreenStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent
          textStyles={globalStyles.headerName}
          paragraphName={strings.getString('contact_us')}
        />
        <CloseWindowComponent iconSvg={<CloseWindowSvg />} goToCloseButton={goToCloseBottomSheet} />
      </View>
      <ScrollView style={contactScreenStyles.centerContainer}>
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('you_can_contact_us')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('email')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_have_questions')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_value_your_attention')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
