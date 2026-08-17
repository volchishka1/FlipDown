import { ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface CloseWindowComponentProps {
  goToCloseButton?: () => void;
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  iconSvg?: ReactNode;
}
