/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { TextMask } from 'react-native-masked-text';

import styles from './styles';

import { ItemButton, RectangularButton, TextInputMask } from '../../../components';

import imgCash from '../../../assets/images/cash.png';

const CalculateChange: React.FC = () => {
  return (
    <SafeAreaView style={styles.section}>
      <View style={styles.container}>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>Total: </Text>
          <TextMask style={styles.price} type="money" value={`${String(5)}00`} />
        </View>
      </View>
      <View style={[styles.container, { flex: 1 }]}>
        <TextInputMask
          value={String(0)}
          type="money"
          label="Troco para quanto?"
          onChangeText={() => {}}
        />
        <ItemButton image={imgCash} icon="check" title="Já está trocado" action={() => {}} />
      </View>
      <View style={styles.container}>
        <RectangularButton title="Confirmar Pedido" action={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default CalculateChange;
