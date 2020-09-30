import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { CircularButton, TextInput } from '../../../components';

import styles from '../styles';

type FormattedInput = {
  raw: string;
  formatted: string;
};

const FirstStep: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<FormattedInput>({ formatted: '', raw: '' });
  const [done, setDone] = useState(false);

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
      <View style={{ alignItems: 'center' }}>
        <CircularButton icon="chevron-right" action={() => {}} disabled={!done} />
      </View>
    </SafeAreaView>
  );
};

export default FirstStep;
