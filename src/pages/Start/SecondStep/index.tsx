import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import { CircularButton } from '../../../components';
import { THEME } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

interface ICurrentPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const SecondStep: React.FC = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const { navigate } = useNavigation();

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (location) => {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setCurrentPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      () => getCurrentPosition(),
      { timeout: 20000 },
    );
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#123456' }}>
      <MapView style={{ flex: 1 }} initialRegion={currentPosition} minZoomLevel={15}>
        <Marker
          coordinate={{ latitude, longitude }}
          onDragEnd={(e) => {
            setLatitude(e.nativeEvent.coordinate.latitude);
            setLongitude(e.nativeEvent.coordinate.longitude);
          }}
          draggable>
          <MI name="google-maps" size={72} color={THEME.background3} />
        </Marker>
      </MapView>
      <View style={styles.bottomTab}>
        <Text style={styles.text}>Segure o marcador e arraste para</Text>
        <Text style={styles.text}>sua atual localização</Text>
        <CircularButton icon="chevron-right" action={() => navigate('ThirdStep')} />
      </View>
    </SafeAreaView>
  );
};

export default SecondStep;
