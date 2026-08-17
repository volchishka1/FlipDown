import { ViewStyle } from 'react-native';

export interface CustomButtonProps {
  onPress: () => void;
  textButton: string;
  textButtonStyle?: ViewStyle;
  style?: ViewStyle | ViewStyle[];
  isLoad?: boolean;
  label: string;
  disabled?: boolean | undefined;
}
