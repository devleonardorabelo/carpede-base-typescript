import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import ShopContext from '../../contexts/shop';
import { ParamList } from '../../types';

import styles from './styles';
import { VerticalProductList } from '../../components';

type ScreenRouteProp = RouteProp<ParamList, 'List'>;

const List: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { loadProducts, products } = useContext(ShopContext);
  const {
    params: { _id, name, filter },
  } = useRoute<ScreenRouteProp>();

  const loadProductList = async () => {
    await loadProducts({ category: _id, filter });
    setLoading(false);
  };

  useEffect(() => {
    void loadProductList();
  }, []);

  return (
    <>
      <SafeAreaView style={[styles.section]}>
        <View style={styles.container}>
          {name ? (
            <Text style={styles.title}>{name}</Text>
          ) : (
            <>
              <Text style={styles.subtitle}>Resultados para:</Text>
              <Text style={styles.title}>{filter}</Text>
            </>
          )}
        </View>
        <VerticalProductList
          data={products}
          onEndReached={() => loadProductList()}
          loading={loading}
        />
      </SafeAreaView>
    </>
  );
};

export default List;
