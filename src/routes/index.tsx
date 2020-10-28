import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import StartRoutes from './start.routes';
import SplashScreen from 'react-native-splash-screen';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  setTimeout(() => {
    SplashScreen.hide();
  }, 1500);
  return signed ? <AppRoutes /> : <StartRoutes />;
};

export default Routes;
