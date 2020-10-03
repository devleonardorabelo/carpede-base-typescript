import React from 'react';
import { View, Text } from 'react-native';
import { TextInputMask as TextMask, TextInputMaskTypeProp } from 'react-native-masked-text';

import styles from './styles';

interface Props {
  label: string;
  placeholder?: string;
  onChangeText: (formatted: string | undefined, raw: string | undefined) => void;
  value: string;
  type: TextInputMaskTypeProp;
}

const TextInputMask: React.FC<Props> = ({ label, placeholder, onChangeText, value, type }) => (
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
