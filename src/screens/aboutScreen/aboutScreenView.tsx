import { SafeAreaView, View } from 'react-native';

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
  goToCloseBottomSheet: () => void;
};

export const AboutScreenView: FC<AboutScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <SafeAreaView style={aboutScreenStyles.rootContainer}>
      <View style={globalStyles.topContainer}>
        <ParagraphComponent
          style={globalStyles.headerName}
          paragraphName={strings.getString('about_project')}
        />
        <CloseWindowComponent
          iconSvg={<CloseWindowSvg />}
          goToCloseBottomSheet={goToCloseBottomSheet}
        />
      </View>
      <ScrollView style={aboutScreenStyles.centerContainer}>
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('if_you_need')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('how_to_use')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('working_with')}
        />
        <DotComponent text={strings.getString('go_to_the_app')} style={globalStyles.dotComponent} />
        <DotComponent text={strings.getString('copy_link')} style={globalStyles.dotComponent} />
        <DotComponent text={strings.getString('open_the_app')} style={globalStyles.dotComponent} />
        <TextComponent
          style={globalStyles.dotComponent}
          text={strings.getString('the_final_step')}
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={strings.getString('benefits')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('if_you_chosen')}
        />
        <DotComponent style={globalStyles.dotComponent} text={strings.getString('no_user_fees')} />
        <DotComponent style={globalStyles.dotComponent} text={strings.getString('high_quality')} />
        <DotComponent style={globalStyles.dotComponent} text={strings.getString('any_format')} />
        <DotComponent
          style={globalStyles.dotComponent}
          text={strings.getString('confidentiality')}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={strings.getString('using_the_fliptok')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
