import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import { Product } from '../../../types';

import styles from './styles';

interface SlideProps {
  data: Product[];
  product?: boolean;
  title: string;
}

const Item: React.FC<Product> = ({ image, name, price, onSale, onSaleValue }: Product) => (
  <View style={styles.largeItem}>
    <Image
      style={styles.largeItemImage}
      source={{ uri: image, cache: 'only-if-cached' }}
      resizeMode="cover"
    />
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.boldText}>{name}</Text>
    </View>

    <View style={{ flexDirection: 'row' }}>
      {onSale ? (
        <>
          <TextMask
            style={[styles.boldText, styles.onSale]}
            value={String(onSaleValue)}
            type={'money'}
          />
          <TextMask style={styles.boldText} value={String(price)} type={'money'} />
        </>
      ) : (
        <TextMask style={styles.boldText} value={String(price)} type={'money'} />
      )}
    </View>
  </View>
);

const ProductList: React.FC<SlideProps> = ({ data, title }: SlideProps) => (
  <View>
    <Text style={[styles.subtitle, styles.itemTitleContainer]}>{title}</Text>
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
          onSale={item.onSale}
          onSaleValue={item.onSaleValue}
          description={item.description}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  </View>
);

export default ProductList;
