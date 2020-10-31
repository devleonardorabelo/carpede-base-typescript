import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type ButtonProps = {
  title: JSX.Element | string;
  action: () => void;
  disabled?: boolean;
};

const Rectangular: React.FC<ButtonProps> = ({ title, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    style={[styles.rectangularButton, disabled && styles.rectangularButtonDisabled]}
    disabled={disabled}>
    <Text style={styles.retangularButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default Rectangular;
