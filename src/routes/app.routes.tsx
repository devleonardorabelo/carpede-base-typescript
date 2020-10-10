import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../contexts/auth';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import { THEME } from '../constants';

import Home from '../pages/Home';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <AppStack.Navigator
      screenOptions={{
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
              <MI name="logout" size={28} color={THEME.background3} />
            </TouchableOpacity>
          ),
        })}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
