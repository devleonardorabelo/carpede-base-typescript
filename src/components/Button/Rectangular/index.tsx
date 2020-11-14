import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from '../../../types/components';

import styles from './styles';

const Rectangular: React.FC<ButtonProps> = ({ title, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    style={[styles.rectangularButton, disabled && styles.rectangularButtonDisabled]}
    disabled={disabled}>
    <Text style={disabled ? styles.retangularButtonTextDisabled : styles.retangularButtonText}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default Rectangular;
