/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '../constants';

import FirstStep from '../pages/Start/FirstStep';
import SecondStep from '../pages/Start/SecondStep';
import ThirdStep from '../pages/Start/ThirdStep';

const StartStack = createStackNavigator();

const StartRoutes: React.FC = () => (
  <StartStack.Navigator
    screenOptions={({ navigation }) => ({
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
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MI name="arrow-left" size={28} color={THEME.background3} />
        </TouchableOpacity>
      ),
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
    })}>
    <StartStack.Screen
      options={{ title: 'BEM-VINDO', headerLeft: () => null }}
      name="FirstStep"
      component={FirstStep}
    />
    <StartStack.Screen
      options={{
        headerTransparent: true,
        title: 'ONDE VOCÊ ESTÁ?',
      }}
      name="SecondStep"
      component={SecondStep}
    />
    <StartStack.Screen
      options={{
        title: 'ENDEREÇO DE ENTREGA',
      }}
      name="ThirdStep"
      component={ThirdStep}
    />
  </StartStack.Navigator>
);

export default StartRoutes;
