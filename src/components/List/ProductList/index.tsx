import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMask } from 'react-native-masked-text';
import { Product } from '../../../types';

import styles from './styles';

interface SlideProps {
  data: Product[];
  loading: boolean;
}

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
              value={String(onSaleValue)}
              type="money"
            />
            <TextMask style={[styles.boldText, styles.onSale]} value={String(price)} type="money" />
          </View>
        ) : (
          <TextMask style={[styles.boldText, styles.price]} value={String(price)} type="money" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const ProductList: React.FC<SlideProps> = ({ data, loading }: SlideProps) => {
  return loading ? (
    <Text>Carregando</Text>
  ) : (
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
  );
};

export default ProductList;
