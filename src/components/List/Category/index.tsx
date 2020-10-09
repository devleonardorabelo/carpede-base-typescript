import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import { Category } from '../../../types';

import styles from './styles';

interface SlideProps {
  data: Category[];
  product?: boolean;
  title: string;
}

const Item: React.FC<Category> = ({ image, name }: Category) => (
  <View style={styles.largeItem}>
    <Image
      style={styles.largeItemImage}
      source={{ uri: image, cache: 'only-if-cached' }}
      resizeMode="cover"
    />
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.boldText}>{name}</Text>
    </View>
  </View>
);

const CategoryList: React.FC<SlideProps> = ({ data, title }: SlideProps) => (
  <View>
    <Text style={[styles.subtitle, styles.itemTitleContainer]}>{title}</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => String(item._id)}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({ item }) => <Item _id={item._id} image={item.image} name={item.name} />}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  </View>
);

export default CategoryList;
