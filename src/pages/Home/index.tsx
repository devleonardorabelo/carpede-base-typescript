import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Header, SearchInput, HorizontalList } from '../../components';

import styles from '../styles';

const Home: React.FC = () => {
  const data = [
    {
      _id: '123456',
      image:
        'https://exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash.jpg?quality=70&strip=info',
      name: 'Hamburger Gigante',
      price: 12,
    },
    {
      _id: '126485',
      image: 'https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg',
      name: 'X Frango',
      price: 10,
    },
    {
      _id: '12233456',
      image:
        'https://exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash.jpg?quality=70&strip=info',
      name: 'Hamburger Gigante',
      price: 12,
    },
  ];

  return (
    <SafeAreaView style={styles.section}>
      <Header iconLeft="logout" iconRight="face-profile" title="INICIO" />
      <View style={styles.container}>
        <Text style={styles.title}>Olá, Leonardo</Text>
        <Text style={styles.subtitle}>Tá com Fome de quê?</Text>
        <SearchInput action={() => {}} onChangeText={() => {}} placeholder="Ex: Hamburger" />
      </View>
      <HorizontalList data={data} />
      <HorizontalList data={data} large />
    </SafeAreaView>
  );
};

export default Home;
