import React from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemProps {
  _id: string;
  image: string;
  name: string;
  price?: number;
  product?: boolean;
}

interface SlideProps {
  data: ItemProps[];
  product?: boolean;
  title: string;
}

const Item: React.FC<ItemProps> = ({ image, name, price, product }: ItemProps) => (
  <View style={product ? styles.largeItem : styles.normalItem}>
    <Image
      style={product ? styles.largeItemImage : styles.normalItemImage}
      source={{ uri: image, cache: 'only-if-cached' }}
      resizeMode="cover"
    />
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.itemName}>{name}</Text>
    </View>
    {product && <Text style={styles.itemName}>{price}</Text>}
  </View>
);

const Horizontal: React.FC<SlideProps> = ({ data, product, title }: SlideProps) => (
  <View>
    <Text style={[styles.itemsTitle, styles.itemTitleContainer]}>{title}</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => String(item._id)}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({ item }) => (
        <Item
          _id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          product={product}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  </View>
);

export default Horizontal;
