import React from 'react';
import { View, Text } from 'react-native';
import { TextInputMask as TextMask } from 'react-native-masked-text';

import styles from './styles';

interface Props {
  label: string;
  placeholder?: string;
  onChangeText: (formatted: string | undefined, raw: string | undefined) => void;
  onSubmitEditing?: () => void;
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
      type="cel-phone"
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) ',
      }}
    />
  </View>
);

export default TextInputMask;
