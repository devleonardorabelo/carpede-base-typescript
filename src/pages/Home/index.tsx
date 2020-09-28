import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Header, SearchInput, HorizontalList } from '../../components';
import { ShopContext } from '../../contexts/shop';

import styles from './styles';

const Home: React.FC = () => {
  const { categories } = useContext(ShopContext);

  return (
    <SafeAreaView style={styles.section}>
      <Header iconLeft="logout" iconRight="face-profile" title="INICIO" />
      <View style={styles.container}>
        <Text style={styles.title}>Olá, Leonardo</Text>
        <Text style={styles.subtitle}>Tá com Fome de quê?</Text>
        <SearchInput action={() => {}} onChangeText={() => {}} placeholder="Ex: Hamburger" />
      </View>
      <HorizontalList data={categories} title="Categorias" />
    </SafeAreaView>
  );
};

export default Home;
