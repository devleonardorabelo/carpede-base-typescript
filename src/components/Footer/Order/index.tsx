import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import Gesture from 'react-native-swipe-gestures';
import FE from 'react-native-vector-icons/Feather';

import styles from './styles';

type OrderFooterProps = {
  productLength: number;
  action: () => void;
  totalOrder: number;
};

const OrderFooter: React.FC<OrderFooterProps> = ({ productLength, action, totalOrder }) => (
  <Gesture onSwipeUp={action}>
    <TouchableOpacity style={styles.orderFooter} onPress={action} activeOpacity={1}>
      <View style={styles.orderFooterContainer}>
        <View style={styles.orderFooterLeft}>
          <FE name="shopping-bag" color="#FFFFFF" size={28} />
          <Text style={styles.orderFooterLeftBadge}>{productLength}</Text>
        </View>
        <Text style={[styles.boldText, styles.orderFooterCenter]}>Ver pedido</Text>
        <TextMask
          style={[styles.boldText, styles.orderFooterRight]}
          value={String(totalOrder)}
          type={'money'}
        />
      </View>
    </TouchableOpacity>
  </Gesture>
);

export default OrderFooter;
