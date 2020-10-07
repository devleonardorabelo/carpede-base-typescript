import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, PermissionsAndroid, ScrollView, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';
import { CircularButton, TextInput, TextInputMask } from '../../../components';

const FirstStep: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [CPF, setCPF] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [done, setDone] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    if (name.length >= 4 && CPF.length === 14 && whatsapp.length === 15) {
      setDone(true);
      Keyboard.dismiss();
    } else {
      setDone(false);
    }
  }, [name, CPF, whatsapp]);

  const navigateToSecondStep = async () => {
    const getPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (getPermission === 'denied') return;
    navigate('SecondStep', { name, CPF, whatsapp });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.section}>
        <Text style={styles.title}>Seja bem-vindo(a)</Text>
        <Text style={[styles.subtitle, { marginBottom: 32 }]}>
          Primeiro precisamos saber mais sobre você
        </Text>
        <TextInput
          label="Qual o seu nome?"
          onChangeText={(e) => setName(e)}
          placeholder="Digite aqui"
        />
        <TextInputMask
          label="Qual o seu CPF?"
          value={CPF}
          onChangeText={(formatted) => setCPF(String(formatted))}
          type={'cpf'}
          placeholder={'000.000.000-00'}
        />
        <TextInputMask
          label="Qual o seu whatsapp?"
          value={whatsapp}
          onChangeText={(formatted) => setWhatsapp(String(formatted))}
          type={'cel-phone'}
          placeholder={'(00) 00000-0000'}
        />
        <View style={{ alignItems: 'center' }}>
          <CircularButton icon="chevron-right" action={navigateToSecondStep} disabled={!done} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstStep;
