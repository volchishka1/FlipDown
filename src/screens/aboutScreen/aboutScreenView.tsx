import { SafeAreaView, TouchableOpacityProps, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';
import { DotComponent } from '@components/dotComponent/dotComponent';
import { ParagraphComponent } from '@components/textComponent/paragraphComponent';
import { TextComponent } from '@components/textComponent/textComponent';

import { aboutScreenStyles } from './styles';
import { globalStyles } from '@components/globalStyles/globalStyles';
import { strings } from '@constants/textConst';
import { CloseWindowSvg } from '@assets/closeModalWindow';

export type AboutScreenProps = {
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
};

export const AboutScreenView: FC<AboutScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <SafeAreaView style={aboutScreenStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent
          textStyles={globalStyles.headerName}
          paragraphName={strings.getString('about_project')}
        />
        <CloseWindowComponent iconSvg={<CloseWindowSvg />} goToCloseButton={goToCloseBottomSheet} />
      </View>
      <ScrollView style={aboutScreenStyles.centerContainer}>
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_need')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('how_to_use')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('working_with')}
        />
        <DotComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('go_to_the_app')}
          style={globalStyles.dotComponent}
        />
        <DotComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('copy_link')}
          style={globalStyles.dotComponent}
        />
        <DotComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('open_the_app')}
          style={globalStyles.dotComponent}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('the_final_step')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('benefits')}
        />
        <TextComponent
          textStyles={globalStyles.descriptionText}
          text={strings.getString('if_you_chosen')}
        />
        <DotComponent
          textStyles={globalStyles.descriptionText}
          style={globalStyles.dotComponent}
          text={strings.getString('no_user_fees')}
        />
        <DotComponent
          textStyles={globalStyles.descriptionText}
          style={globalStyles.dotComponent}
          text={strings.getString('high_quality')}
        />
        <DotComponent
          textStyles={globalStyles.descriptionText}
          style={globalStyles.dotComponent}
          text={strings.getString('any_format')}
        />
        <DotComponent
          textStyles={globalStyles.descriptionText}
          style={globalStyles.dotComponent}
          text={strings.getString('confidentiality')}
        />
        <TextComponent
          textStyles={globalStyles.footerDescriptionText}
          text={strings.getString('using_the_flipdown')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
