import React from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemProps {
  _id: string;
  image: string;
  name: string;
  price?: number;
  large?: boolean;
}

interface SlideProps {
  data: ItemProps[];
  large?: boolean;
}

const Item: React.FC<ItemProps> = ({ image, name, price, large }: ItemProps) => (
  <View style={styles.largeItem}>
    <Image
      style={styles.largeItemImage}
      source={{ uri: image, cache: 'only-if-cached' }}
      resizeMode="cover"
    />
    <Text style={styles.largeItemName}>{name}</Text>
    {large && <Text style={styles.largeItemName}>{price}</Text>}
  </View>
);

export const HorizontalList: React.FC<SlideProps> = ({ data, large }: SlideProps) => (
  <View>
    <FlatList
      data={data}
      keyExtractor={(item) => String(item._id)}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({ item }) => (
        <Item _id={item._id} image={item.image} name={item.name} price={item.price} large={large} />
      )}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  </View>
);
