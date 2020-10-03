import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const SecondStep: React.FC = () => {
  return (
    <View>
      <MapView style={{ flex: 1 }} />
    </View>
  );
};

export default SecondStep;
