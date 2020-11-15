import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import FE from 'react-native-vector-icons/Feather';
import { ButtonTheme, ColorTheme } from '../../../constants';
import { TextInputProps } from '../../../types/component';

import styles from './styles';

const Search: React.FC<TextInputProps> = ({ placeholder, onChangeText, action }) => (
  <View style={styles.searchBox}>
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={action}
    />
    <TouchableOpacity onPress={action}>
      <FE name="search" size={ButtonTheme.iconSize} color={ColorTheme.background3} />
    </TouchableOpacity>
  </View>
);

export default Search;
