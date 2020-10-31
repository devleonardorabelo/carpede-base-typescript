import React from 'react';
import { TouchableOpacity } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '../../../constants';

import styles from './styles';

type ButtonProps = {
  icon: string;
  action: () => void;
  disabled?: boolean;
};

const Circular: React.FC<ButtonProps> = ({ icon, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    style={[styles.iconButton, disabled && styles.iconButtonDisabled]}
    disabled={disabled}>
    <MI name={icon} size={28} color={!disabled ? THEME.background1 : THEME.color4} />
  </TouchableOpacity>
);

export default Circular;
