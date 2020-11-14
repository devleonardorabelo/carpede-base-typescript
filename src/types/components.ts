import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import { TextInputMaskTypeProp } from 'react-native-masked-text';
import { Category, Product } from '.';

export type ButtonProps = {
  icon?: string;
  style?: StyleProp<ViewStyle>;
  title?: JSX.Element | string;
  action: () => void;
  disabled?: boolean;
};

export type TextInputProps = {
  label?: string | JSX.Element;
  placeholder?: string;
  onChangeText: (e: string) => void;
  onSubmitEditing?: () => void;
  action?: () => void;
  style?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  defaultValue?: string;
};

export type MaskInputProps = {
  label: string;
  placeholder?: string;
  onChangeText: (formatted: string | undefined, raw: string | undefined) => void;
  value: string;
  type: TextInputMaskTypeProp;
};

export type OrderFooterProps = {
  productLength: number;
  action: () => void;
  totalOrder: number;
};

export type ListProps = {
  data: Category[] & Product[];
  title?: string;
  loading?: boolean;
};
