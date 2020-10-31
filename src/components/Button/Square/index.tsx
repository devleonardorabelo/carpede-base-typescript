import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '../../../constants';

import styles from './styles';

type ButtonProps = {
  icon: string;
  style?: StyleProp<ViewStyle>;
  action: () => void;
  disabled?: boolean;
};

const Square: React.FC<ButtonProps> = ({ icon, style, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    style={[styles.squareButton, disabled && styles.squareButtonDisabled, style]}
    disabled={disabled}>
    <MI name={icon} size={28} color={!disabled ? THEME.background3 : THEME.color4} />
  </TouchableOpacity>
);

export default Square;
