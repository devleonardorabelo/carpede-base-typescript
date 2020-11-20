/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View } from 'react-native';
import OrderContext from '../../contexts/order';
import AuthContext from '../../contexts/auth';
import ShopContext from '../../contexts/shop';
import Gesture from 'react-native-swipe-gestures';
import { TextMask } from 'react-native-masked-text';
import PriceToString from '../../utils/priceToStringFormat';

import styles from './styles';
import { OrderList, RectangularButton, SquareButton } from '../../components';

import imgMap from '../../assets/images/map.png';

const Cart: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const { products, resetOrder, totalProducts } = useContext(OrderContext);
  const { customer } = useContext(AuthContext);
  const { storeInfo } = useContext(ShopContext);

  return (
    <SafeAreaView style={styles.section}>
      <Gesture style={{ flex: 1 }} onSwipeDown={() => goBack()}>
        <OrderList data={products} />
        <View style={[styles.orderBottomTab, styles.container]}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={imgMap} style={{ width: 48, height: 48, marginRight: 16 }} />
            <View>
              <Text style={styles.text}>Entregar em:</Text>
              <Text style={styles.lightText}>
                {customer?.address} {customer?.complement} {customer?.number}
              </Text>
              <Text style={styles.boldText}>{storeInfo?.averageDeliveryTime} minutos</Text>
            </View>
          </View>
        </View>
        <View style={[styles.orderBottomTab, styles.container]}>
          <View style={styles.orderBottomTabItem}>
            <Text style={styles.text}>Total dos itens: </Text>
            <TextMask
              style={[styles.subtitle, styles.price]}
              value={PriceToString(totalProducts)}
              type={'money'}
            />
          </View>
          <View style={[styles.orderBottomTabItem, { marginBottom: 24 }]}>
            <Text style={styles.text}>Taxa de entrega: </Text>
            <TextMask
              style={[styles.boldText]}
              value={PriceToString(storeInfo?.fees.delivery)}
              type={'money'}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <SquareButton
              style={{ marginRight: 8 }}
              action={() => {
                resetOrder();
                goBack();
              }}
              icon="trash-can-outline"
            />
            <RectangularButton action={() => navigate('SelectPayment')} title="Ir para pagamento" />
          </View>
        </View>
      </Gesture>
    </SafeAreaView>
  );
};

export default Cart;
