/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View } from 'react-native';
import OrderContext from '../../contexts/order';
import AuthContext from '../../contexts/auth';
import Gesture from 'react-native-swipe-gestures';
import { TextMask } from 'react-native-masked-text';

import styles from './styles';
import { OrderList, RectangularButton, SquareButton } from '../../components';

import imgMap from '../../assets/images/map.png';

const Checkout: React.FC = () => {
  const { goBack } = useNavigation();
  const { products, resetOrder } = useContext(OrderContext);
  const { customer } = useContext(AuthContext);

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
            </View>
          </View>
        </View>
        <View style={[styles.orderBottomTab, styles.container]}>
          <View style={styles.orderBottomTabItem}>
            <Text style={styles.text}>Total dos itens: </Text>
            <TextMask style={[styles.subtitle, styles.price]} value={String(55)} type={'money'} />
          </View>
          <View style={[styles.orderBottomTabItem, { marginBottom: 24 }]}>
            <Text style={styles.text}>Taxa de entrega: </Text>
            <TextMask style={[styles.boldText]} value={String(55)} type={'money'} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <SquareButton style={{ marginRight: 8 }} action={() => {}} icon="trash-can-outline" />
            <RectangularButton action={() => {}} title="Ir para pagamento" />
          </View>
        </View>
      </Gesture>
    </SafeAreaView>
  );
};

export default Checkout;
