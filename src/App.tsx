import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ShopProvider } from './contexts/shop';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ShopProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ShopProvider>
    </NavigationContainer>
  );
};

export default App;
