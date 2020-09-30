import React from 'react';
import { View, Text } from 'react-native';
import TextMask from 'react-native-text-input-mask';

import styles from './styles';

interface Props {
  label: string;
  placeholder?: string;
  onChangeText: (formatted: string | undefined, raw: string | undefined) => void;
  onSubmitEditing: () => void;
  mask: string;
}

const TextInputMask: React.FC<Props> = ({
  label,
  placeholder,
  onChangeText,
  onSubmitEditing,
  mask,
}) => (
  <View style={styles.textInputBox}>
    <Text style={styles.labelInput}>{label}</Text>
    <TextMask
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      mask={mask}
    />
  </View>
);

export default TextInputMask;
