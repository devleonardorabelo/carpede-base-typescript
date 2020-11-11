import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text } from 'react-native';
import OrderContext from '../../contexts/order';
import Gesture from 'react-native-swipe-gestures';

import styles from './styles';
import { OrderList } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Checkout: React.FC = () => {
  const { goBack } = useNavigation();
  const { products } = useContext(OrderContext);

  console.log(products);

  return (
    <SafeAreaView style={styles.section}>
      <Gesture style={{ height: 400 }} onSwipeDown={() => goBack()}>
        <OrderList data={products} />
      </Gesture>
    </SafeAreaView>
  );
};

export default Checkout;
