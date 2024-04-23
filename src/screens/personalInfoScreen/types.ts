import { TextProps, TouchableOpacityProps } from 'react-native';

import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';

export type InfoScreenViewProps = {
  bottomSheetModalRef?: React.Ref<BottomSheetModal>;
  snapPoints: BottomSheetModalProps['snapPoints'];
  goToTermsAndConditionsModalScreen: TouchableOpacityProps['onPress'];
  goToPrivacyPolicyModal: TouchableOpacityProps['onPress'];
  goToContactsModal: TouchableOpacityProps['onPress'];
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
  actionTriggered: TextProps['children'];
};
