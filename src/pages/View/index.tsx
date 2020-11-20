import React, { useState, useContext } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { TextMask } from 'react-native-masked-text';
import { OrderProduct, ParamList } from '../../types';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderContext from '../../contexts/order';
import PriceToString from '../../utils/priceToStringFormat';

import styles from './styles';
import { RectangularButton, SquareButton, TextInput } from '../../components';

type ScreenRouteProp = RouteProp<ParamList, 'View'>;

const ViewProduct: React.FC = () => {
  const { addProduct } = useContext(OrderContext);
  const {
    params: { _id, image, name, description, onSale, price, onSaleValue },
  } = useRoute<ScreenRouteProp>();
  const { goBack } = useNavigation();

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
              <TextMask style={styles.onSale} value={PriceToString(price)} type="money" />
              {' por '}
              <TextMask style={styles.price} value={PriceToString(onSaleValue)} type="money" />
            </Text>
          ) : (
            <Text style={styles.subtitle}>
              <TextMask style={styles.price} value={PriceToString(price)} type="money" />
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
            onChangeText={(e) => setComments(e)}
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
                <TextMask value={PriceToString(onSaleValue * quantity)} type="money" />
              </>
            ) : (
              <>
                <Text>{quantity} por </Text>
                <TextMask value={PriceToString(price * quantity)} type="money" />
              </>
            )
          }
          action={() => {
            const model: OrderProduct = {
              product: {
                _id,
                id: Math.random().toString(36).substr(2, 10),
                image,
                name,
                description,
                onSale: Boolean(onSale),
                price,
                onSaleValue,
              },
              quantity,
              comments,
            };
            addProduct(model);
            goBack();
          }}
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
