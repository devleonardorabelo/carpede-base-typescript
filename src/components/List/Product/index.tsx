import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextMask } from 'react-native-masked-text';
import { Product } from '../../../types';

import styles from './styles';

interface SlideProps {
  data: Product[];
  product?: boolean;
  title: string;
}

const Item: React.FC<Product> = ({
  _id,
  image,
  name,
  price,
  onSale,
  onSaleValue,
  description,
}: Product) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.largeItem}
      onPress={() =>
        navigate('View', { _id, image, name, price, onSale, onSaleValue, description })
      }>
      <Image
        style={styles.largeItemImage}
        source={{ uri: image, cache: 'only-if-cached' }}
        resizeMode="cover"
      />
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View>
          <Text style={styles.boldText}>{name}</Text>
          <Text style={[styles.lightText, { marginBottom: 8 }]}>{description.slice(0, 40)}...</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {onSale ? (
            <>
              <TextMask
                style={[styles.boldText, styles.price]}
                value={String(onSaleValue)}
                type={'money'}
              />
              <TextMask
                style={[styles.boldText, styles.onSale]}
                value={String(price)}
                type={'money'}
              />
            </>
          ) : (
            <TextMask
              style={[styles.boldText, styles.price]}
              value={String(price)}
              type={'money'}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
