import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ParamList } from '../../types';
import ShopContext from '../../contexts/shop';

import styles from './styles';
import { VerticalProductList } from '../../components';

type ScreenRouteProp = RouteProp<ParamList, 'List'>;

const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { loadProducts, products } = useContext(ShopContext);
  const {
    params: { _id, name },
  } = useRoute<ScreenRouteProp>();

  const loadProductList = async () => {
    await loadProducts({ category: { _id, name }, page: 1 });
    setLoading(false);
  };

  useEffect(() => {
    void loadProductList();
  }, []);

  return (
    <SafeAreaView style={[styles.section, styles.container]}>
      <Text style={styles.title}>{name}</Text>
      <VerticalProductList data={products} loading={loading} />
    </SafeAreaView>
  );
};

export default List;
