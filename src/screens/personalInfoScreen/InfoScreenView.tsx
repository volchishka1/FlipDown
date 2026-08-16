import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { LogoComponent } from '@components/logoComponent/logoComponent';
import { TextComponent } from '@components/textComponent/textComponent';

import { infoScreenStyles } from './styles';
import { InfoScreenViewProps } from './types';
import { strings } from '@constants';

export const InfoScreenView: FC<InfoScreenViewProps> = (props) => {
  const { goToContacts, goToAbout, goToTermsAndConditions, goToPrivacyPolicy } = props;

  return (
    <View style={infoScreenStyles.rootContainer}>
      <View style={infoScreenStyles.centerContainer}>
        <TouchableOpacity onPress={goToAbout}>
          <Text style={infoScreenStyles.buttonStyles}>{strings.getString(`about`)}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToContacts}>
          <Text style={infoScreenStyles.buttonStyles}>{strings.getString(`contacts`)}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToTermsAndConditions}>
          <Text style={infoScreenStyles.buttonStyles}>
            {strings.getString(`terms_and_conditions`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToPrivacyPolicy}>
          <Text style={infoScreenStyles.buttonStyles}>{strings.getString(`privacy_policy`)}</Text>
        </TouchableOpacity>
      </View>
      <View style={infoScreenStyles.bottomContainer}>
        <LogoComponent />
        <View style={infoScreenStyles.textDescriptionContainer}>
          <TextComponent
            textStyles={infoScreenStyles.textDescriptionStyle}
            text={'© 2026 FlipDown. All rights reserved.'}
          />
        </View>
      </View>
    </View>
  );
};
