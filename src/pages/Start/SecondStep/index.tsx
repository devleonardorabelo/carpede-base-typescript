import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import FA from 'react-native-vector-icons/FontAwesome5';
import { THEME } from '../../../constants';

import styles from '../styles';
import { CircularButton } from '../../../components';

interface ICurrentPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

type ParamList = {
  params: {
    name: string;
    CPF: string;
    whatsapp: string;
  };
};

const SecondStep: React.FC = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markerDone, setMarkerDone] = useState<boolean>(false);

  const { navigate } = useNavigation();

  const { params } = useRoute<RouteProp<ParamList, 'params'>>();
  const { name, CPF, whatsapp } = params;

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
            setMarkerDone(true);
          }}
          draggable>
          <View style={styles.marker}>
            {!markerDone && (
              <View style={styles.callout}>
                <Text style={styles.text}>Você está aqui?</Text>
              </View>
            )}
            <FA name="map-marker-alt" size={60} color={THEME.background3} />
          </View>
        </Marker>
      </MapView>
      <View style={styles.bottomTab}>
        <Text style={styles.text}>Segure o marcador e arraste para</Text>
        <Text style={styles.text}>sua atual localização</Text>
        <CircularButton
          icon="chevron-right"
          action={() => navigate('ThirdStep', { name, CPF, whatsapp, latitude, longitude })}
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondStep;
