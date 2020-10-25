import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMask } from 'react-native-masked-text';
import Skeleton from 'react-native-skeleton-content-nonexpo';
import { Product } from '../../../types';

import styles from './styles';
import { THEME } from '../../../constants';

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
    {data.length === 0 ? (
      <>
        <Skeleton
          containerStyle={{ flex: 1, flexDirection: 'row', paddingLeft: 16, marginBottom: 12 }}
          isLoading={true}
          boneColor={THEME.background2}
          highlightColor={THEME.background1}
          layout={[
            {
              key: '1',
              width: styles.largeItem.width,
              height: styles.largeItemImage.height,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '2',
              width: styles.largeItem.width,
              height: styles.largeItemImage.height,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '3',
              width: styles.largeItem.width,
              height: styles.largeItemImage.height,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '4',
              width: styles.largeItem.width,
              height: styles.largeItemImage.height,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '5',
              width: styles.largeItem.width,
              height: styles.largeItemImage.height,
              marginRight: 16,
              borderRadius: 8,
            },
          ]}
        />
        <Skeleton
          containerStyle={{ flex: 1, flexDirection: 'row', paddingLeft: 16, marginBottom: 8 }}
          isLoading={true}
          boneColor={THEME.background2}
          highlightColor={THEME.background1}
          layout={[
            {
              key: '1',
              width: styles.largeItem.width,
              height: 18,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '2',
              width: styles.largeItem.width,
              height: 18,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '3',
              width: styles.largeItem.width,
              height: 18,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '4',
              width: styles.largeItem.width,
              height: 18,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '5',
              width: styles.largeItem.width,
              height: 18,
              marginRight: 16,
              borderRadius: 8,
            },
          ]}
        />
        <Skeleton
          containerStyle={{ flex: 1, flexDirection: 'row', paddingLeft: 16, marginBottom: 8 }}
          isLoading={true}
          boneColor={THEME.background2}
          highlightColor={THEME.background1}
          layout={[
            {
              key: '1',
              width: styles.largeItem.width,
              height: 30,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '2',
              width: styles.largeItem.width,
              height: 30,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '3',
              width: styles.largeItem.width,
              height: 30,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '4',
              width: styles.largeItem.width,
              height: 30,
              marginRight: 16,
              borderRadius: 8,
            },
            {
              key: '5',
              width: styles.largeItem.width,
              height: 30,
              marginRight: 16,
              borderRadius: 8,
            },
          ]}
        />
        <Skeleton
          containerStyle={{ flex: 1, flexDirection: 'row', paddingLeft: 16, marginBottom: 24 }}
          isLoading={true}
          boneColor={THEME.background2}
          highlightColor={THEME.background1}
          layout={[
            {
              key: '1',
              width: 100,
              height: 24,
              marginRight: styles.largeItem.width - 84,
              borderRadius: 8,
            },
            {
              key: '2',
              width: 100,
              height: 24,
              marginRight: styles.largeItem.width - 84,
              borderRadius: 8,
            },
            {
              key: '3',
              width: 100,
              height: 24,
              marginRight: styles.largeItem.width - 84,
              borderRadius: 8,
            },
            {
              key: '4',
              width: 100,
              height: 24,
              marginRight: styles.largeItem.width - 84,
              borderRadius: 8,
            },
            {
              key: '5',
              width: 100,
              height: 24,
              marginRight: styles.largeItem.width - 84,
              borderRadius: 8,
            },
          ]}
        />
      </>
    ) : (
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
    )}
  </View>
);

export default ProductList;
