import React from 'react';
import { View, Text } from 'react-native';
import { TextInputMask as TextMask } from 'react-native-masked-text';
import { MaskInputProps } from '../../../types/components';

import styles from './styles';

const TextInputMask: React.FC<MaskInputProps> = ({
  label,
  placeholder,
  onChangeText,
  value,
  type,
}) => (
  <View style={styles.textInputBox}>
    <Text style={styles.labelInput}>{label}</Text>
    <TextMask
      value={value}
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      type={type}
    />
  </View>
);

export default TextInputMask;
