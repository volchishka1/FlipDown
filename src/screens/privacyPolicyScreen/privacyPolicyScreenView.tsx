import { SafeAreaView, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';

import { privacyPolicyScreenStyles } from './styles';
import { ParagraphComponent } from '@components/textComponent/paragraphComponent';
import { TextComponent } from '@components/textComponent/textComponent';
import { globalStyles } from '@components/globalStyles/globalStyles';
import { DotComponent } from '@components/dotComponent/dotComponent';
import { strings } from '@constants';
import { CloseWindowSvg } from '@assets/closeModalWindow';

export type PrivacyPolicyScreenTypes = {
  goToCloseBottomSheet: () => void;
};

export const PrivacyPolicyScreenView: FC<PrivacyPolicyScreenTypes> = ({ goToCloseBottomSheet }) => {
  return (
    <SafeAreaView style={privacyPolicyScreenStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent
          textStyles={globalStyles.headerNameTerms}
          style={globalStyles.headerName}
          paragraphName={strings.getString('privacy_policy')}
        />
        <CloseWindowComponent iconSvg={<CloseWindowSvg />} goToCloseButton={goToCloseBottomSheet} />
      </View>
      <ScrollView style={privacyPolicyScreenStyles.centerContainer}>
        <TextComponent
          textStyles={globalStyles.descriptionUpdatedText}
          text={strings.getString('last_update')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('visit_our_website')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('engage_with_us')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('questions_or_concerns')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('reading_this_privacy_notice')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('summary_of_key_points')}
        />
        <TextComponent
          textStyles={globalStyles.boldTextWithMargin}
          text={strings.getString('summary_provides')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('personal_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('when_you_visit')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('do_we_process')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_do_not_process_sensitive')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('do_we_receive')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_do_not_receive')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('how_do_we_process_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_process_your_info')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('in_what_situation')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_share_info')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('how_we_keep_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_have_organizational')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('what_are_you_rights')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('depending_of_where_you')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('want_to_learn_more')}
        />
        <ParagraphComponent paragraphName={strings.getString('table_of_contents')} />
        <View style={globalStyles.tableContainer}>
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('first_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('second_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('third_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('fourth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('fifth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('sixth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('seventh_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('eighth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('ninth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('tenth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('eleventh_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('twelfth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('thirteenth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('fourteenth_part')} />
          <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('fifteenth_part')} />
        </View>
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('first_part')}
        />
        <TextComponent
          textStyles={globalStyles.paragraphDescriptionNameBold}
          text={strings.getString('personal_info_you_disclose')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_collect')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('sensitive_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('do_we_process_sensitive_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('all_personal_info')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('second_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_process_your_info_to_provide')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('we_process_your_personal_info')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('to_save_or_protect')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('to_may_process')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('third_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_only_process')}
        />
        <TextComponent
          textStyles={globalStyles.boldUnderlineText}
          text={strings.getString('if_you_located_eu')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('the_general_data_protection')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('consent')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_process_your_info')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('legal_obligations')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_process_your_info_for_compliance')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('vital_interests')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_process_info_to_protect')}
        />
        <TextComponent
          textStyles={globalStyles.boldUnderlineText}
          text={strings.getString('if_you_located_in_canada')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_process_info_for_specific_permission')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('in_some_exceptional_cases')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fourth_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_share_info_in_specific_situations')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_need')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('business_transfers')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_share_or_transfer_info')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fifth_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_use_cookies')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_keep_your_info')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('sixth_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_will_only_keep')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('when_we_have_no')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('seventh_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_aim_to_protect')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_have_implemented')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('eighth_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_do_not_knowingly')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('ninth_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('in_some_regions')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('in_some_regions_eea_uk')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_will_consider')}
        />
        <TextComponent
          textStyles={globalStyles.boldUnderlineText}
          text={strings.getString('withdrawing_your_consent')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('withdrawing_your_consent_if_we')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('however_please')}
        />
        <TextComponent
          textStyles={globalStyles.boldUnderlineText}
          text={strings.getString('cookies_and_similar')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('most_web')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('tenth_part')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('most_web_and_mobile')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('eleventh_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_resident_of_california')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('california_civil')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_adult')}
        />
        <TextComponent
          textStyles={globalStyles.paragraphDescriptionNameBold}
          text={strings.getString('ccpa')}
        />
        <TextComponent textStyles={globalStyles.descriptionText} text={strings.getString('california_resident')} />
        <DotComponent textStyles={globalStyles.descriptionText} text={strings.getString('every_individual')} />
        <DotComponent textStyles={globalStyles.descriptionText} text={strings.getString('every_individual_state')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('all_other')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_this_definitions')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('what_categories')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_have_not_collected')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('a_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('a_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('b_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('b_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('c_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('c_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('d_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('d_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('e_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('e_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('f_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('f_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('g_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('g_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('h_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('h_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('i_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('i_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('j_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('j_type_describe')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('k_type')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('k_type_describe')}
        />
        <TextComponent
          textStyles={globalStyles.boldTextWithMargin}
          text={strings.getString('l_type')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_also')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('how_do_we_use')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('more_info_about')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('you_may_contact')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_use_agent')}
        />
        <TextComponent
          textStyles={globalStyles.boldText}
          text={strings.getString('will_your_more_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_disclose')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_use_your_personal_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('fliptok_has_not_disclosed')}
        />
        <TextComponent
          textStyles={globalStyles.boldTextWithMargin}
          text={strings.getString('your_rights_with_respect')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('right_to_request')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('you_can_ask')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('right_to_be_informed')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('depending_on_the_circumstances')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('right_to_non_discriminations')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_not_discriminate')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('rights_to_limit')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_do_not_process')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('verification_process')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('upon_receiving')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_only_use_personal_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('other_privacy_rights')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('you_may_object')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('twelfth_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_resident_of_virginia')}
        />
        <TextComponent
          textStyles={globalStyles.paragraphDescriptionNameBold}
          text={strings.getString('virginia_cdpa')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('under_the_virginia')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('consumer_means')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('personal_data_means')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('sale_of_personal_data')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_this_definition')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('the_info_we_collect')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('your_rights')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('right_to_be_informed_whether_or_not')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('exercise_your_rights')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('more_info')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('your_may_contact_us')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_using')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('verification_process')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_request')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('upon_receiving_your_request')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionUnderlineText}
          text={strings.getString('right_to_appeal')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_we_decline')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('thirteenth_part')}
        />
        <TextComponent textStyles={globalStyles.boldText} text={strings.getString('in_short')} />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_will_update')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('we_may_update_info')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fourteenth_part')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_have_question')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('fifteenth_part')}
        />
        <TextComponent
          textStyles={globalStyles.footerDescriptionText}
          text={strings.getString('based_on_the_app_law')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
