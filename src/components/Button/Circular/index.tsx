import React from 'react';
import { TouchableOpacity } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonTheme } from '../../../constants';
import { ButtonProps } from '../../../types/components';

import styles from './styles';

const Circular: React.FC<ButtonProps> = ({ icon = 'plus', action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    style={[styles.iconCircularButton, disabled && styles.iconCircularButtonDisabled]}
    disabled={disabled}>
    <MI
      name={icon}
      size={ButtonTheme.iconSize}
      color={!disabled ? ButtonTheme.contentColor : ButtonTheme.contentColorDisabled}
    />
  </TouchableOpacity>
);

export default Circular;
