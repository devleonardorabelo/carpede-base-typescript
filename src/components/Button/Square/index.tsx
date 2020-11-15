import React from 'react';
import { TouchableOpacity } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonTheme, ColorTheme } from '../../../constants';
import { ButtonProps } from '../../../types/component';

import styles from './styles';

const Square: React.FC<ButtonProps> = ({ icon = 'plus', style, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    style={[styles.squareButton, disabled && styles.squareButtonDisabled, style]}
    disabled={disabled}>
    <MI
      name={icon}
      size={ButtonTheme.iconSize}
      color={!disabled ? ButtonTheme.background : ColorTheme.color4}
    />
  </TouchableOpacity>
);

export default Square;
