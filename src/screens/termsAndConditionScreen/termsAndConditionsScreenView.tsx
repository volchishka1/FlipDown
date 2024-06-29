import { SafeAreaView, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';
import { ParagraphComponent } from '@components/textComponent/paragraphComponent';
import { TextComponent } from '@components/textComponent/textComponent';

import { termsAndConditionsStyles } from './styles';
import { globalStyles } from '@components/globalStyles/globalStyles';
import { strings } from '@constants';

export type TermsAndConditionsTypes = {
  goToCloseBottomSheet: () => void;
};

export const TermsAndConditionComponent: FC<TermsAndConditionsTypes> = ({
  goToCloseBottomSheet,
}) => {
  return (
    <SafeAreaView style={termsAndConditionsStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent
          style={globalStyles.headerName}
          paragraphName={strings.getString('terms_and_conditions')}
        />
        <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      </View>
      <ScrollView style={termsAndConditionsStyles.centerContainer}>
        <TextComponent
          text={strings.getString('last_update')}
          style={globalStyles.descriptionUpdatedText}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('agreement_to_our_legal_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_are_fliptok')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_operate')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('you_can_contact')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('these_legal_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('supplemental')}
        />
        <TextComponent style={globalStyles.descriptionText} text={strings.getString('all_users')} />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_recommend')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('table_of_contents')}
        />
        <View style={globalStyles.tableContainer}>
          <TextComponent text={strings.getString('first_part_terms')} />
          <TextComponent text={strings.getString('second_part_terms')} />
          <TextComponent text={strings.getString('third_part_terms')} />
          <TextComponent text={strings.getString('fourth_part_terms')} />
          <TextComponent text={strings.getString('fifth_part_terms')} />
          <TextComponent text={strings.getString('sixth_part_terms')} />
          <TextComponent text={strings.getString('seventh_part_terms')} />
          <TextComponent text={strings.getString('eighth_part_terms')} />
          <TextComponent text={strings.getString('ninth_part_terms')} />
          <TextComponent text={strings.getString('tenth_part_terms')} />
          <TextComponent text={strings.getString('eleventh_part_terms')} />
          <TextComponent text={strings.getString('twelfth_part_terms')} />
          <TextComponent text={strings.getString('thirteenth_part_terms')} />
          <TextComponent text={strings.getString('fourteenth_part_terms')} />
          <TextComponent text={strings.getString('fifteenth_part_terms')} />
          <TextComponent text={strings.getString('sixteenth_part_terms')} />
          <TextComponent text={strings.getString('seventeenth_part_terms')} />
          <TextComponent text={strings.getString('eighteenth_part_terms')} />
          <TextComponent text={strings.getString('nineteenth_part_terms')} />
          <TextComponent text={strings.getString('twentieth_part_terms')} />
          <TextComponent text={strings.getString('twentieth_one_part_terms')} />
          <TextComponent text={strings.getString('twentieth_two_part_terms')} />
        </View>
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('first_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('the_info_provided')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('the_services')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('second_part_terms')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphDescriptionName}
          paragraphName={strings.getString('our_intellectual_property')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_are_the_owner')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('our_content')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('the_content_and_marks')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphDescriptionName}
          paragraphName={strings.getString('your_use_of_our_services')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('subject_to_your_compliance')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('except_and_set_out')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('if_you_wish')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_reserve_all')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('any_breach')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphDescriptionName}
          paragraphName={strings.getString('your_submission')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('please_review')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('submission')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('bu_directly')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('you_are_responsible')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('bu_sending')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('third_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('bu_using_services')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('if_you_provide')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fourth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('tou_may_not_access')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('as_a_user_of_services')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fifth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('the_services_does_not')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('sixth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('you_and_services')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('bu_submitting')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_do_not_assert')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('seventh_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_allow_advertisers')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('eighth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_reserve_right')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('ninth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_care_about')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('tenth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('these_legal_terms_shall')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('if_we_terminate')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('eleventh_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_reserve_the_right')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_cannot_guarantee')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('twelfth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('these_legal_terms_governed')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('thirteenth_part_terms')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphDescriptionName}
          paragraphName={strings.getString('informal_negotiations')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('to_expedite_resolution')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphDescriptionName}
          paragraphName={strings.getString('binding_arbitration')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('any_dispute')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fourteenth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('there_may_be_information')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fifteenth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('the_services_are_provided')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('sixteenth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('in_not_event')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('seventeenth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('you_agree_to_defend')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('eighteenth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('we_will_maintain')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('nineteenth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('visiting_the_services')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('twentieth_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('if_any_complaint')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('twentieth_one_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('these_legal_terms_and_policies')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('twentieth_two_part_terms')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('in_order_to_resolve')}
        />
        <TextComponent
          textStyles={termsAndConditionsStyles.footerTextStyle}
          text={strings.getString('fliptok_bottom_text')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
