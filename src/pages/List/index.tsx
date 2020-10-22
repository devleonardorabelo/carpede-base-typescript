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
    params: { _id },
  } = useRoute<ScreenRouteProp>();

  const loadProductList = async () => {
    await loadProducts({ category: _id, page: 1 });
    setLoading(false);
  };

  useEffect(() => {
    void loadProductList();
  }, []);

  return (
    <SafeAreaView style={[styles.section, styles.container]}>
      {loading ? <Text>Loading</Text> : <VerticalProductList data={products} />}
    </SafeAreaView>
  );
};

export default List;
