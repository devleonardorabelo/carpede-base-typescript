/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMask } from 'react-native-masked-text';
import Skeleton from 'react-native-skeleton-content-nonexpo';
import { Product } from '../../../types';
import { ColorTheme } from '../../../constants';

import styles from './styles';

import imgChef from '../../../assets/images/chef.png';
import { ListProps } from '../../../types/component';

const Item: React.FC<Product> = ({
  _id,
  image,
  name,
  description,
  price,
  onSale,
  onSaleValue,
}: Product) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigate('View', { _id, image, name, price, onSale, onSaleValue, description })
      }>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.boldText}>{name}</Text>
        <Text style={styles.lightText}>{description.slice(0, 64)}...</Text>
        {onSale ? (
          <View style={{ flexDirection: 'row' }}>
            <TextMask
              style={[styles.boldText, styles.price, { marginRight: 8 }]}
              value={`${String(onSaleValue)}00`}
              type="money"
            />
            <TextMask
              style={[styles.boldText, styles.onSale]}
              value={`${String(price)}00`}
              type="money"
            />
          </View>
        ) : (
          <TextMask
            style={[styles.boldText, styles.price]}
            value={`${String(price)}00`}
            type="money"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const ProductList: React.FC<ListProps & { data: Product[] }> = ({ data, loading = false }) => {
  return (
    <Skeleton
      containerStyle={{ flex: 1, paddingLeft: 16 }}
      isLoading={loading}
      boneColor={ColorTheme.background2}
      layout={[
        { key: '1', width: '100%', height: 98, marginBottom: 22, borderRadius: 8 },
        { key: '2', width: '100%', height: 98, marginBottom: 22, borderRadius: 8 },
        { key: '3', width: '100%', height: 98, marginBottom: 22, borderRadius: 8 },
        { key: '4', width: '100%', height: 98, marginBottom: 22, borderRadius: 8 },
        { key: '5', width: '100%', height: 98, marginBottom: 22, borderRadius: 8 },
      ]}>
      {data.length !== 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item._id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Item
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              onSale={item.onSale}
              onSaleValue={item.onSaleValue}
              description={item.description}
            />
          )}
        />
      ) : (
        <>
          <Text style={styles.subtitle}>Nenhum produto disponível nessa Categoria</Text>
          <Image source={imgChef} style={styles.illustration} />
        </>
      )}
    </Skeleton>
  );
};

export default ProductList;
