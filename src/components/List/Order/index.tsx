import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMask } from 'react-native-masked-text';
import { OrderProduct } from '../../../types';
import PriceToString from '../../../utils/priceToStringFormat';

import styles from './styles';

const Item: React.FC<OrderProduct> = ({
  comments,
  product: { _id, description, image, name, onSale, onSaleValue, price, id },
  quantity,
}: OrderProduct) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.orderItem}
      onPress={() =>
        navigate('View', { _id, image, name, price, onSale, onSaleValue, description, id })
      }>
      <Image
        style={styles.orderItemImage}
        source={{ uri: image, cache: 'only-if-cached' }}
        resizeMode="cover"
      />
      <View style={styles.orderItemBody}>
        <Text style={styles.boldText}>{name}</Text>
        {comments.length > 0 && <Text style={styles.lightText}>{comments}</Text>}
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.boldText}>{quantity}x</Text>
          <TextMask
            style={[styles.boldText, styles.price, { marginLeft: 8 }]}
            value={onSaleValue ? PriceToString(onSaleValue) : PriceToString(price)}
            type={'money'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const OrderList: React.FC<{ data: OrderProduct[] }> = ({ data }) => (
  <FlatList
    style={{ flex: 1 }}
    data={data}
    keyExtractor={(item) => String(item.product.id)}
    renderItem={({ item: { comments, product, quantity } }) => (
      <Item comments={comments} product={product} quantity={quantity} />
    )}
    contentContainerStyle={{ padding: 16 }}
  />
);

export default OrderList;
