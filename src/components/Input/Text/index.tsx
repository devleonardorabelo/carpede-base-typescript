import React from 'react';
import { View, TextInput as TI, Text } from 'react-native';
import { TextInputProps } from '../../../types/component';

import styles from './styles';

const TextInput: React.FC<TextInputProps> = ({
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
