import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <View>
      <Header iconLeft="logout" iconRight="face-profile" title="INICIO" />
    </View>
  );
};

export default Home;
