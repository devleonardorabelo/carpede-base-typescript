import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FirstStep from '../pages/Start/FirstStep';
import SecondStep from '../pages/Start/SecondStep';

const StartStack = createStackNavigator();

const StartRoutes: React.FC = () => (
  <StartStack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
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
    <StartStack.Screen options={{ headerShown: false }} name="FirstStep" component={FirstStep} />
    <StartStack.Screen
      options={{ headerTransparent: true }}
      name="SecondStep"
      component={SecondStep}
    />
  </StartStack.Navigator>
);

export default StartRoutes;
