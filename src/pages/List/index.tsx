import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ParamList } from '../../types';
import ShopContext from '../../contexts/shop';

import styles from './styles';
import { VerticalProductList } from '../../components';

type ScreenRouteProp = RouteProp<ParamList, 'List'>;

const List: React.FC = () => {
  const { loadProducts, products } = useContext(ShopContext);
  const {
    params: { _id },
  } = useRoute<ScreenRouteProp>();

  useEffect(() => {
    loadProducts({ category: _id, page: 1 });
  }, []);

  return (
    <SafeAreaView style={[styles.section, styles.container]}>
      <VerticalProductList data={products} />
    </SafeAreaView>
  );
};

export default List;
