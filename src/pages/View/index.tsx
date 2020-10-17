import React, { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';

import styles from './styles';
import { TextMask } from 'react-native-masked-text';
import { RectangularButton, SquareButton } from '../../components';

type ParamList = {
  View: {
    image: string;
    name: string;
    price: number;
    onSale: string;
    onSaleValue: number;
    description: string;
  };
};

type ScreenRouteProp = RouteProp<ParamList, 'View'>;

const ViewProduct: React.FC = () => {
  const { params } = useRoute<ScreenRouteProp>();

  const [quantity, setQuantity] = useState<number>(1);
  return (
    <>
      <ScrollView style={styles.section}>
        <Image style={styles.image} source={{ uri: params?.image }} />
        <View style={styles.container}>
          <Text style={styles.title}>{params?.name}</Text>
          <Text style={[styles.text, { marginBottom: 8 }]}>{params?.description}</Text>
          {params.onSale ? (
            <Text style={styles.subtitle}>
              {'De '}
              <TextMask style={styles.onSale} value={String(params?.price)} type="money" />
              {' por '}
              <TextMask style={styles.price} value={String(params?.onSaleValue)} type="money" />
            </Text>
          ) : (
            <Text style={styles.subtitle}>
              <TextMask style={styles.onSale} value={String(params?.price)} type="money" />
            </Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomTabAdd}>
        <SquareButton
          icon="minus"
          action={() => {
            if (quantity >= 1) setQuantity(quantity - 1);
          }}
          style={{ marginRight: 8 }}
          disabled={quantity === 1 ? true : false}
        />
        <RectangularButton
          title={
            params?.onSale ? (
              <>
                <Text>{quantity} por </Text>
                <TextMask value={String(params?.onSaleValue * quantity)} type="money" />
              </>
            ) : (
              <>
                <Text>{quantity} por </Text>
                <TextMask value={String(params?.price * quantity)} type="money" />
              </>
            )
          }
          action={() => {}}
        />
        <SquareButton
          icon="plus"
          action={() => setQuantity(quantity + 1)}
          style={{ marginLeft: 8 }}
        />
      </View>
    </>
  );
};

export default ViewProduct;
