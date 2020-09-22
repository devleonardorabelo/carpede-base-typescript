import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderProvider } from '../contexts/order';

import Home from '../pages/Home';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = (): JSX.Element => (
  <OrderProvider>
    <AppStack.Navigator
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
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  </OrderProvider>
);

export default AppRoutes;
