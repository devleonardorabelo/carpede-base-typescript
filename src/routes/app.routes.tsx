/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../contexts/auth';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import { THEME } from '../constants';

import Home from '../pages/Home';
import View from '../pages/View';
import List from '../pages/List';
import Profile from '../pages/Profile';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <AppStack.Navigator
      screenOptions={{
        title: ' ',
        headerStyle: {
          elevation: 0,
        },
        headerLeftContainerStyle: {
          padding: 8,
        },
        headerRightContainerStyle: {
          padding: 8,
        },
        headerTitleStyle: {
          color: THEME.color2,
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
        options={() => ({
          headerLeft: () => (
            <TouchableOpacity onPress={signOut}>
              <MI name="logout" size={28} color={THEME.color2} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={signOut}>
              <MI name="face-profile" size={28} color={THEME.color2} />
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
              <MI name="arrow-left" size={28} color={THEME.color2} />
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
              <MI name="arrow-left" size={28} color={THEME.color2} />
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
              <MI name="arrow-left" size={28} color={THEME.color2} />
            </TouchableOpacity>
          ),
        })}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
