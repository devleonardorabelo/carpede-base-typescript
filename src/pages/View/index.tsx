import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { TextMask } from 'react-native-masked-text';
import { ParamList } from '../../types';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import { RectangularButton, SquareButton, TextInput } from '../../components';

type ScreenRouteProp = RouteProp<ParamList, 'View'>;

const ViewProduct: React.FC = () => {
  const {
    params: { image, name, description, onSale, price, onSaleValue },
  } = useRoute<ScreenRouteProp>();

  const [quantity, setQuantity] = useState<number>(1);
  const [comments, setComments] = useState<string>('');

  return (
    <>
      <ScrollView style={styles.section}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={[styles.text, { marginBottom: 8 }]}>{description}</Text>
          {onSale ? (
            <Text style={styles.subtitle}>
              {'De '}
              <TextMask style={styles.onSale} value={String(price)} type="money" />
              {' por '}
              <TextMask style={styles.price} value={String(onSaleValue)} type="money" />
            </Text>
          ) : (
            <Text style={styles.subtitle}>
              <TextMask style={styles.price} value={String(price)} type="money" />
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <TextInput
            label={
              <>
                <MI name="comment" size={16} />
                <Text> Alguma observação?</Text>
              </>
            }
            placeholder="Ex: Sem cebola, molho à parte"
            onChangeText={() => {}}
            multiline
          />
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
            onSale ? (
              <>
                <Text>{quantity} por </Text>
                <TextMask value={String(onSaleValue * quantity)} type="money" />
              </>
            ) : (
              <>
                <Text>{quantity} por </Text>
                <TextMask value={String(price * quantity)} type="money" />
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
