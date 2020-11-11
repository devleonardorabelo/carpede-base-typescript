import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { OrderProduct } from '../../../types';

import styles from './styles';

type OrderProps = {
  data: OrderProduct[] | undefined;
};

const Item: React.FC<OrderProduct> = ({ comments, product, quantity }: OrderProduct) => (
  <View>
    <Text>{product._id}</Text>
  </View>
);

const OrderList: React.FC<OrderProps> = ({ data }) => (
  <FlatList
    style={{ flex: 1 }}
    data={data}
    keyExtractor={(item) => String(item.product._id)}
    renderItem={({ item: { comments, product, quantity } }) => (
      <Item comments={comments} product={product} quantity={quantity} />
    )}
    ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
    contentContainerStyle={{ paddingHorizontal: 16 }}
  />
);

export default OrderList;
