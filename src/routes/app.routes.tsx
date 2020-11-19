/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../contexts/auth';
import { OrderProvider } from '../contexts/order';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import { ColorTheme } from '../constants';

import Home from '../pages/Home';
import View from '../pages/View';
import List from '../pages/List';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import SelectPayment from '../pages/Checkout/SelectPayment';
import AddCard from '../pages/Checkout/AddCard';
import CalculateChange from '../pages/Checkout/CalculateChange';
import ConfirmPayment from '../pages/Checkout/ConfirmPayment';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <OrderProvider>
      <AppStack.Navigator
        screenOptions={{
          title: ' ',
          cardStyle: {
            elevation: 999,
          },
          headerStyle: {
            elevation: 0,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
          headerLeftContainerStyle: {
            padding: 8,
          },
          headerRightContainerStyle: {
            padding: 8,
          },
          headerTitleStyle: {
            color: ColorTheme.color2,
            fontFamily: 'Montserrat SemiBold',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={signOut}>
                <MI name="logout" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <MI name="face-profile" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="View"
          component={View}
          options={({ navigation }) => ({
            title: 'DETALHES',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-left" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="List"
          component={List}
          options={({ navigation }) => ({
            title: 'CATEGORIA',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-left" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            title: 'MEU PERFIL',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-left" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="Cart"
          component={Cart}
          options={({ navigation }) => ({
            title: 'PEDIDO',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-down" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateY: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.height, 0],
                      }),
                    },
                  ],
                },
              };
            },
          })}
        />
        <AppStack.Screen
          name="SelectPayment"
          component={SelectPayment}
          options={({ navigation }) => ({
            title: 'SELECIONAR PAGAMENTO',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-left" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="AddCard"
          component={AddCard}
          options={({ navigation }) => ({
            title: 'ADICIONAR CARTÃO',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-left" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="CalculateChange"
          component={CalculateChange}
          options={({ navigation }) => ({
            title: 'DINHEIRO',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-left" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="ConfirmPayment"
          component={ConfirmPayment}
          options={({ navigation }) => ({
            title: 'CONFIRMAR',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MI name="arrow-left" size={28} color={ColorTheme.background4} />
              </TouchableOpacity>
            ),
          })}
        />
      </AppStack.Navigator>
    </OrderProvider>
  );
};

export default AppRoutes;
