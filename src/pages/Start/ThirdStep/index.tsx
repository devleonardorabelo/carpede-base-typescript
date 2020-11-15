import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import AuthContext from '../../../contexts/auth';
import RequestBase from '../../../services/api';
import { ParamList } from '../../../types';

import styles from '../styles';
import { CircularButton, TextInput } from '../../../components';

const ThirdStep: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [number, setNumber] = useState<number>(0);
  const [area, setArea] = useState<string>('');
  const [deviceToken, setDeviceToken] = useState<string>('');
  const [done, setDone] = useState<boolean>(false);

  const { params } = useRoute<RouteProp<ParamList, 'ThirdStep'>>();
  const { name, CPF, whatsapp, latitude, longitude } = params;
  const { signUp } = useContext(AuthContext);

  const handleSignUp = async () => {
    const customer = {
      name,
      CPF,
      whatsapp,
      address,
      complement,
      number,
      area,
      deviceToken,
      latitude: Number(latitude),
      longitude: Number(longitude),
    };
    await signUp(customer);
    await RequestBase({
      route: 'customer',
      body: customer,
    });
  };

  const getTokenDevice = async () => {
    const token = await messaging().getToken();
    setDeviceToken(token);
  };

  useEffect(() => {
    void getTokenDevice();
  }, []);

  useEffect(() => {
    if (address.length >= 4 && number > 0 && area.length >= 4) {
      setDone(true);
    } else {
      setDone(false);
    }
  }, [address, number, area]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.section}>
        <TextInput label="Endereço" onChangeText={(e) => setAddress(e)} />
        <TextInput label="Complemento" onChangeText={(e) => setComplement(e)} />
        <View style={styles.row}>
          <TextInput
            label="Número"
            onChangeText={(e) => setNumber(Number(e))}
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
          <CircularButton icon="chevron-right" action={() => handleSignUp()} disabled={!done} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThirdStep;
