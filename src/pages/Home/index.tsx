import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Header, SearchInput } from '../../components';

import styles from '../styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.section}>
      <Header iconLeft="logout" iconRight="face-profile" title="INICIO" />
      <View style={styles.container}>
        <Text style={styles.title}>Olá, Leonardo</Text>
        <Text style={styles.subtitle}>Tá com Fome de quê?</Text>
        <SearchInput action={() => {}} onChangeText={() => {}} placeholder="Ex: Hamburger" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
