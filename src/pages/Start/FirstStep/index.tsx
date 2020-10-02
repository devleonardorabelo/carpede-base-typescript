import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';

import { CircularButton, TextInput, TextInputMask } from '../../../components';

import styles from '../styles';

type FormattedInput = {
  raw: string | undefined;
  formatted: string | undefined;
};

const FirstStep: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<FormattedInput>({
    formatted: '',
    raw: '',
  });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (name.length >= 4 && whatsapp.formatted?.length === 16) setDone(true);
    else setDone(false);
  }, [name, whatsapp]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo(a)</Text>
      <Text style={[styles.subtitle, { marginBottom: 32 }]}>
        Primeiro precisamos saber mais sobre você
      </Text>
      <TextInput label="Qual o seu nome?" onChangeText={(e) => setName(e)} />
      <TextInputMask
        label="Qual o seu whatsapp?"
        onChangeText={(formatted, raw) => {
          setWhatsapp({ formatted, raw });
        }}
        mask={'([00]) [0] [0000] [0000]'}
      />
      <View style={{ alignItems: 'center' }}>
        <CircularButton icon="chevron-right" action={() => {}} disabled={!done} />
      </View>
    </SafeAreaView>
  );
};

export default FirstStep;
