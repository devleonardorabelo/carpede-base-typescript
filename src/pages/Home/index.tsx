import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { SearchInput, CategoryList, ProductList } from '../../components';
import ShopContext from '../../contexts/shop';
import AuthContext from '../../contexts/auth';

import styles from './styles';

const Home: React.FC = () => {
  const { categories, onSale, bestSellers } = useContext(ShopContext);
  const { customer } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.section}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Olá, {customer?.name} </Text>
          <Text style={styles.subtitle}>Tá com Fome de quê?</Text>
          <SearchInput action={() => {}} onChangeText={() => {}} placeholder="Ex: Hamburger" />
        </View>
        <CategoryList data={categories} title="Categorias" />
        <ProductList data={onSale} title="Promoções" product />
        <ProductList data={bestSellers} title="Mais Vendidos" product />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
