import React, { useContext, useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShopContext from '../../contexts/shop';
import AuthContext from '../../contexts/auth';
import OrderContext from '../../contexts/order';
import { ColorTheme } from '../../constants';

import styles from './styles';
import { SearchInput, CategoryList, ProductList, OrderFooter } from '../../components';

const Home: React.FC = () => {
  const { categories, onSale, bestSellers } = useContext(ShopContext);
  const { customer } = useContext(AuthContext);
  const { products, totalProducts } = useContext(OrderContext);

  const { navigate } = useNavigation();

  const [filter, setFilter] = useState<string>('');

  return (
    <>
      <StatusBar backgroundColor={ColorTheme.menuColor} barStyle="dark-content" />
      <ScrollView style={[styles.section]}>
        <View style={styles.container}>
          <Text style={styles.title}>Olá, {customer?.name} </Text>
          <Text style={styles.subtitle}>Tá com Fome de quê?</Text>
          <SearchInput
            action={() => {
              if (filter.length > 0) navigate('List', { filter });
            }}
            onChangeText={(e) => setFilter(e)}
            placeholder="Ex: Hamburger"
          />
        </View>
        <View style={products.length > 0 && { marginBottom: 80 }}>
          <CategoryList data={categories} title="Categorias" />
          <ProductList data={onSale} title="Promoções" />
          <ProductList data={bestSellers} title="Mais Vendidos" />
        </View>
      </ScrollView>
      {products.length > 0 && (
        <OrderFooter
          productLength={products.length}
          action={() => navigate('Cart')}
          totalOrder={totalProducts}
        />
      )}
    </>
  );
};

export default Home;
