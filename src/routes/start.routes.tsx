import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FirstStep from '../pages/Home';

const StartStack = createStackNavigator();

const StartRoutes: React.FC = () => (
  <StartStack.Navigator
    screenOptions={{
      headerShown: false,
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
    <StartStack.Screen name="FirstStep" component={FirstStep} />
  </StartStack.Navigator>
);

export default StartRoutes;
