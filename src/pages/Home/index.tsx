import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Header, SearchInput, HorizontalList } from '../../components';
import { ShopContext } from '../../contexts/shop';

import styles from './styles';

const Home: React.FC = () => {
  const { categories, onSale, bestSellers } = useContext(ShopContext);

  return (
    <SafeAreaView style={styles.section}>
      <ScrollView>
        <Header iconLeft="logout" iconRight="face-profile" title="INICIO" />
        <View style={styles.container}>
          <Text style={styles.title}>Olá, Leonardo</Text>
          <Text style={styles.subtitle}>Tá com Fome de quê?</Text>
          <SearchInput action={() => {}} onChangeText={() => {}} placeholder="Ex: Hamburger" />
        </View>
        <HorizontalList data={categories} title="Categorias" />
        <HorizontalList data={onSale} title="Promoções" product />
        <HorizontalList data={bestSellers} title="Mais Vendidos" product />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
