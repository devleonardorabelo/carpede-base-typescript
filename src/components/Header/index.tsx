import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '../../constants';

import styles from './styles';

interface Props {
  actionLeft?: () => void;
  actionRight?: () => void;
  iconLeft?: string;
  iconRight?: string;
  title?: string;
}

const Header: React.FC<Props> = ({
  actionLeft,
  actionRight,
  iconLeft,
  iconRight,
  title,
}: Props) => (
  <View style={styles.header}>
    {iconLeft ? (
      <TouchableOpacity onPress={actionLeft}>
        <MI name={iconLeft} size={28} color={THEME.color1} />
      </TouchableOpacity>
    ) : (
      <View style={{ width: 28 }} />
    )}
    {title && <Text style={styles.navigationTitle}>{title}</Text>}
    {iconRight ? (
      <TouchableOpacity onPress={actionRight}>
        <MI name={iconRight} size={28} color={THEME.color1} />
      </TouchableOpacity>
    ) : (
      <View style={{ width: 28 }} />
    )}
  </View>
);

export default Header;
