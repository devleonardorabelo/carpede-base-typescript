import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { CircularButton, TextInput } from '../../../components';

import styles from '../styles';

type FormattedInput = {
  raw: string;
  formatted: string;
};

const FirstStep: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<FormattedInput>({ formatted: '', raw: '' });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo(a)</Text>
      <Text style={[styles.subtitle, { marginBottom: 32 }]}>
        Primeiro precisamos saber mais sobre você
      </Text>
      <TextInput
        label="Qual o seu nome?"
        onChangeText={(e) => setName(e)}
        onSubmitEditing={() => {}}
      />
      <TextInput label="Qual o seu whatsapp?" onChangeText={() => {}} onSubmitEditing={() => {}} />
      <CircularButton icon="plus" action={() => {}} disabled />
    </SafeAreaView>
  );
};

export default FirstStep;
