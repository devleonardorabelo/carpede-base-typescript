import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import FE from 'react-native-vector-icons/Feather';
import { THEME } from '../../../constants';

import styles from './styles';

interface Props {
  placeholder: string;
  onChangeText: (e: any) => void;
  action: () => void;
}

const Search: React.FC<Props> = ({ placeholder, onChangeText, action }) => (
  <View style={styles.searchBox}>
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={action}
    />
    <TouchableOpacity onPress={action}>
      <FE name="search" size={28} color={THEME.background3} />
    </TouchableOpacity>
  </View>
);

export default Search;
