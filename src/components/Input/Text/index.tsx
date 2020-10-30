import React from 'react';
import {
  View,
  TextInput as TI,
  Text,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';

import styles from './styles';

interface Props {
  label: string | JSX.Element;
  placeholder?: string;
  onChangeText: (e: string) => void;
  onSubmitEditing?: () => void;
  style?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  defaultValue?: string;
}

const TextInput: React.FC<Props> = ({
  label,
  placeholder,
  onChangeText,
  onSubmitEditing,
  style,
  keyboardType,
  multiline,
  defaultValue,
}) => (
  <View style={[styles.textInputBox, style]}>
    <Text style={styles.labelInput}>{label}</Text>
    <TI
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType || 'default'}
      multiline={multiline}
      defaultValue={defaultValue}
    />
  </View>
);

export default TextInput;
