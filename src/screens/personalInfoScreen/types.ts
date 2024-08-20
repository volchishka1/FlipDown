import { TextProps, TouchableOpacityProps } from 'react-native';

import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';

export type InfoScreenViewProps = {
  bottomSheetModalRef?: React.Ref<BottomSheetModal>;
  snapPoints: BottomSheetModalProps['snapPoints'];
  goToContactsModal: TouchableOpacityProps['onPress'];
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
  goToTermsAndConditionsLink: TouchableOpacityProps['onPress'];
  goToPrivacyPolicyLink: TouchableOpacityProps['onPress'];
  goToAboutSheet: TouchableOpacityProps['onPress'];
  actionTriggered: TextProps['children'];
};
