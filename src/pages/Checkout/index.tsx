import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';
import Gesture from 'react-native-swipe-gestures';
import styles from './styles';

const Checkout: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <ScrollView style={styles.section}>
      <Gesture style={{ height: 400 }} onSwipeDown={() => goBack()}>
        <Text>Teste</Text>
      </Gesture>
    </ScrollView>
  );
};

export default Checkout;
