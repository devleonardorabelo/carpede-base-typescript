import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

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

const View: React.FC = () => {
  const { params } = useRoute<ScreenRouteProp>();
  return (
    <ScrollView style={styles.section}>
      <Text>{params?.name}</Text>
    </ScrollView>
  );
};

export default View;
