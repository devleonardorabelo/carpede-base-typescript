import React, { useContext } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import StartRoutes from './start.routes';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  setTimeout(() => {
    SplashScreen.hide();
  }, 1500);
  return signed ? <AppRoutes /> : <StartRoutes />;
};

export default Routes;
