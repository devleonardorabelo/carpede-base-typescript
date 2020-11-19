/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { ColorTheme, SizeTheme } from '../../../constants';
import { ButtonProps } from '../../../types';

import styles from './styles';

const Item: React.FC<ButtonProps> = ({
  icon = 'chevron-right',
  iconColor,
  image,
  title,
  subtitle,
  action,
}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={action}>
      <MI
        style={{ marginRight: 8 }}
        name={icon}
        size={SizeTheme.iconSize}
        color={iconColor ? iconColor : ColorTheme.background4}
      />

      <View style={styles.itemContentRight}>
        <View>
          <Text style={styles.boldText}>{title}</Text>
          {subtitle && <Text style={styles.lightText}>{subtitle}</Text>}
        </View>
        {image && <Image style={styles.itemImage} source={image} />}
      </View>
    </TouchableOpacity>
  );
};

export default Item;
