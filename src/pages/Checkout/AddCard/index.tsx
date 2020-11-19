/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import styles from './styles';
import { RectangularButton, TextInput, TextInputMask } from '../../../components';

import imgCardFlags from '../../../assets/images/card-flag.png';

const AddCard: React.FC = () => {
  return (
    <SafeAreaView style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.lightText}>Bandeiras aceitas</Text>
        <Image style={styles.imageCardFlags} source={imgCardFlags} />
      </View>
      <View style={[styles.container, { flex: 1 }]}>
        <TextInputMask
          label="Número do Cartão"
          value=""
          onChangeText={() => {}}
          type="credit-card"
        />
        <View style={styles.rowInput}>
          <TextInput
            style={{ flexGrow: 1, marginRight: 8 }}
            label="Validade"
            onChangeText={() => {}}
          />
          <TextInput style={{ flexGrow: 1, marginLeft: 8 }} label="CVV" onChangeText={() => {}} />
        </View>
        <TextInput label="Nome do Titular" onChangeText={() => {}} />
      </View>
      <View style={styles.container}>
        <RectangularButton title="Adicionar" action={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default AddCard;
