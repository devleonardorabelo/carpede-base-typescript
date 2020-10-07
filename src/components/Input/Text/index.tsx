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
  label: string;
  placeholder?: string;
  onChangeText: (e: any) => void;
  onSubmitEditing?: () => void;
  style?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
}

const TextInput: React.FC<Props> = ({
  label,
  placeholder,
  onChangeText,
  onSubmitEditing,
  style,
  keyboardType,
}) => (
  <View style={[styles.textInputBox, style]}>
    <Text style={styles.labelInput}>{label}</Text>
    <TI
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType || 'default'}
    />
  </View>
);

export default TextInput;
