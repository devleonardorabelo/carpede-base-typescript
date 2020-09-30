import React from 'react';
import { View, TextInput as TI, Text } from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  placeholder?: string;
  onChangeText: (e: any) => void;
  onSubmitEditing: () => void;
}

const TextInput: React.FC<Props> = ({ label, placeholder, onChangeText, onSubmitEditing }) => (
  <View style={styles.textInputBox}>
    <Text style={styles.labelInput}>{label}</Text>
    <TI
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  </View>
);

export default TextInput;
