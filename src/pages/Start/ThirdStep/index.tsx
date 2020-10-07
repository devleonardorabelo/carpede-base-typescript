import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import styles from '../styles';
import { CircularButton, TextInput } from '../../../components';

type ParamList = {
  params: {
    name: string;
    CPF: string;
    whatsapp: string;
    latitude: string;
    longitude: string;
  };
};

const ThirdStep: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [area, setArea] = useState<string>('');

  const { params } = useRoute<RouteProp<ParamList, 'params'>>();
  const { name, CPF, whatsapp, latitude, longitude } = params;

  const handleSignUp = () => {
    const customer = {
      name,
      CPF,
      whatsapp,
      address,
      complement,
      number,
      area,
      latitude,
      longitude,
    };

    console.log(customer);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.section}>
        <TextInput label="Endereço" onChangeText={(e) => setAddress(e)} />
        <TextInput label="Complemento" onChangeText={(e) => setComplement(e)} />
        <View style={styles.row}>
          <TextInput
            label="Número"
            onChangeText={(e) => setNumber(e)}
            style={{ width: '25%' }}
            keyboardType="numeric"
          />
          <TextInput
            label="Bairro"
            onChangeText={(e) => setArea(e)}
            style={{ flexGrow: 1, marginLeft: 16 }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <CircularButton icon="chevron-right" action={() => handleSignUp()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThirdStep;
