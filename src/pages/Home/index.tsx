import React, { useContext, useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import ShopContext from '../../contexts/shop';
import AuthContext from '../../contexts/auth';
import { THEME } from '../../constants';

import styles from './styles';

import { SearchInput, CategoryList, ProductList } from '../../components';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const { categories, onSale, bestSellers } = useContext(ShopContext);
  const { customer } = useContext(AuthContext);
  const { navigate } = useNavigation();

  const [filter, setFilter] = useState<string>('');

  return (
    <>
      <StatusBar backgroundColor={THEME.background1} barStyle="dark-content" />
      <ScrollView style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.title}>Olá, {customer?.name} </Text>
          <Text style={styles.subtitle}>Tá com Fome de quê?</Text>
          <SearchInput
            action={() => navigate('List', { filter })}
            onChangeText={(e) => setFilter(e)}
            placeholder="Ex: Hamburger"
          />
        </View>
        <CategoryList data={categories} title="Categorias" />
        <ProductList data={onSale} title="Promoções" product />
        <ProductList data={bestSellers} title="Mais Vendidos" product />
      </ScrollView>
    </>
  );
};

export default Home;
