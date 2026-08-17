import { FC } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';

import { CloseWindowComponent } from '@components/closeWindowComponent/CloseWindowComponent.tsx';
import { ParagraphComponent } from '@components/paragraphComponent/ParagraphComponent.tsx';
import { TextComponent } from '@components/textComponent/TextComponent.tsx';

import { contactScreenStyles } from './styles';
import { globalStyles } from '@components/globalStyles/globalStyles';
import { strings } from '@constants';
import { CloseWindowSvg } from '@assets/closeModalWindow';
import { ContactsScreenProps } from '@screens/contactsScreen/types.ts';

export const ContactsScreenView: FC<ContactsScreenProps> = ({ goBack }) => {
  return (
    <SafeAreaView style={contactScreenStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent
          textStyles={globalStyles.headerName}
          paragraphName={strings.getString('contact_us')}
        />
        <CloseWindowComponent iconSvg={<CloseWindowSvg />} goToCloseButton={goBack} />
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
