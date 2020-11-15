import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AuthContext from '../../contexts/auth';
import FA from 'react-native-vector-icons/FontAwesome5';
import { ColorTheme } from '../../constants';

import styles from './styles';

import { CircularButton, TextInput, TextInputMask } from '../../components';
import { useNavigation } from '@react-navigation/native';

const Profile: React.FC = () => {
  const { customer, signUp } = useContext(AuthContext);
  const { goBack } = useNavigation();

  const [name, setName] = useState<string>(customer?.name || '');
  const [CPF, setCPF] = useState<string>(customer?.CPF || '');
  const [whatsapp, setWhatsapp] = useState<string>(customer?.whatsapp || '');
  const [address, setAddress] = useState<string>(customer?.address || '');
  const [complement, setComplement] = useState<string>(customer?.complement || '');
  const [area, setArea] = useState<string>(customer?.area || '');
  const [number, setNumber] = useState<number>(customer?.number || 0);
  const [latitude, setLatitude] = useState<number>(customer?.latitude || 0);
  const [longitude, setLongitude] = useState<number>(customer?.longitude || 0);
  const [markerDone, setMarkerDone] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpdateCustomer = async () => {
    setLoading(true);
    await signUp({
      CPF,
      address,
      area,
      complement,
      latitude,
      longitude,
      name,
      number,
      whatsapp,
    });
    setTimeout(() => goBack(), 500);
  };

  useEffect(() => {
    if (name.length >= 4 && CPF.length === 14 && whatsapp.length === 15) {
      setDone(true);
    } else {
      setDone(false);
    }
  }, [name, CPF, whatsapp]);
  return (
    <ScrollView style={styles.section}>
      <Text style={[styles.title, { paddingHorizontal: 16, marginTop: 16 }]}>Sobre você</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.profileNavigation}>
          <TouchableOpacity
            style={[
              styles.buttonNavigation,
              { borderBottomColor: tab === 1 ? ColorTheme.background3 : ColorTheme.background2 },
            ]}
            onPress={() => setTab(1)}>
            <Text style={styles.boldText}>Informações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonNavigation,
              { borderBottomColor: tab === 2 ? ColorTheme.background3 : ColorTheme.background2 },
            ]}
            onPress={() => setTab(2)}>
            <Text style={styles.boldText}>Endereço</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonNavigation,
              { borderBottomColor: tab === 3 ? ColorTheme.background3 : ColorTheme.background2 },
            ]}
            onPress={() => setTab(3)}>
            <Text style={styles.boldText}>Localização</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.container}>
        {tab === 1 && (
          <View>
            <TextInput
              defaultValue={name}
              label="Nome"
              onChangeText={(e) => setName(e)}
              placeholder="Digite aqui"
            />
            <TextInputMask
              label="CPF"
              value={CPF}
              onChangeText={(formatted) => setCPF(String(formatted))}
              type={'cpf'}
              placeholder={'000.000.000-00'}
            />
            <TextInputMask
              label="Whatsapp"
              value={whatsapp}
              onChangeText={(formatted) => setWhatsapp(String(formatted))}
              type={'cel-phone'}
              placeholder={'(00) 00000-0000'}
            />
          </View>
        )}
        {tab === 2 && (
          <View>
            <TextInput
              defaultValue={customer?.address}
              label="Endereço"
              onChangeText={(e) => setAddress(e)}
            />
            <TextInput
              defaultValue={customer?.complement}
              label="Complemento"
              onChangeText={(e) => setComplement(e)}
            />
            <View style={styles.row}>
              <TextInput
                defaultValue={String(customer?.number)}
                label="Número"
                onChangeText={(e) => setNumber(Number(e))}
                style={{ width: '25%' }}
                keyboardType="numeric"
              />
              <TextInput
                defaultValue={customer?.area}
                label="Bairro"
                onChangeText={(e) => setArea(e)}
                style={{ flexGrow: 1, marginLeft: 16 }}
              />
            </View>
          </View>
        )}
        {tab === 3 && (
          <>
            <MapView
              style={{ flex: 1, height: Dimensions.get('screen').height / 2.5 }}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              minZoomLevel={15}>
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
                  <FA name="map-marker-alt" size={60} color={ColorTheme.background3} />
                </View>
              </Marker>
            </MapView>
            <View style={styles.mapFooter}>
              <Text style={[styles.text, styles.mapFooterText]}>
                Segure e arraste para alterar sua posição
              </Text>
            </View>
          </>
        )}
        <View style={{ alignItems: 'center' }}>
          <CircularButton icon="check" action={handleUpdateCustomer} disabled={!done || loading} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
