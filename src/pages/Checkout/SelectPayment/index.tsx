/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { ItemButton } from '../../../components';

import imgSavedCard from '../../../assets/images/saved-card.png';
import imgCreditCard from '../../../assets/images/credit-card.png';
import imgDebitCard from '../../../assets/images/debit-card.png';
import imgCash from '../../../assets/images/cash.png';
import { ColorTheme } from '../../../constants';

const SelectPayment: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.section}>
      <ItemButton
        image={imgSavedCard}
        icon="check"
        title="Meu cartão"
        subtitle="Final 7041"
        iconColor={ColorTheme.color5}
        action={() => navigate('AddCard')}
      />
      <ItemButton
        image={imgCreditCard}
        icon="plus"
        title="Cartão de Crédito"
        action={() => navigate('AddCard')}
      />
      <ItemButton
        image={imgDebitCard}
        title="Cartão de Débito"
        subtitle="Pague na entrega"
        action={() => navigate('CalculateChange')}
      />
      <ItemButton
        image={imgCash}
        title="Dinheiro"
        subtitle="Pague na entrega"
        action={() => navigate('CalculateChange')}
      />
    </SafeAreaView>
  );
};

export default SelectPayment;
