import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TextInputMask } from '../../../components';

const ThirdStep: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [area, setArea] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TextInput label="Endereço" onChangeText={(e) => setAddress(e)} />
        <TextInputMask
          label="Qual o seu CPF?"
          value={number}
          onChangeText={(formatted) => setNumber(String(formatted))}
          type={'custom'}
          placeholder={'000.000.000-00'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThirdStep;
