import React from 'react';
import { TouchableOpacity } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '../../../constants';
import { ButtonProps } from '../../../types/components';

import styles from './styles';

const Square: React.FC<ButtonProps> = ({ icon = 'plus', style, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    style={[styles.squareButton, disabled && styles.squareButtonDisabled, style]}
    disabled={disabled}>
    <MI
      name={icon}
      size={THEME.button.iconSize}
      color={!disabled ? THEME.button.contentColor : THEME.button.contentColorDisabled}
    />
  </TouchableOpacity>
);

export default Square;
