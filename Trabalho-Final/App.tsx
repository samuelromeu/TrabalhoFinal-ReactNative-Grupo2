import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './service/AuthContext';

import Routes from './routes';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  SignPost: undefined;
  Inicio: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
