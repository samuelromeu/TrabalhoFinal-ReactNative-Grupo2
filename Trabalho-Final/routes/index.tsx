import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Perfil from '../screens/Perfil';
import Search from '../screens/Search';
import Tweet from '../screens/Tweet';
import CustomDrawer from '../components/customDrawer';
import TabNavigator from './tabNavigator';
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login/LoginScreen';
import { SignUpScreen } from '../screens/Login/SignUpScreen';
import { AuthProvider, useAuth } from '../service/AuthContext';

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  const { signed } = useAuth();

  return (
    <Drawer.Navigator
      initialRouteName='Splash'
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#00dae5',
        drawerInactiveBackgroundColor: '#fafaf2',
        drawerInactiveTintColor: '#000',
        drawerActiveTintColor: '#00ff',
        drawerStyle: {
          backgroundColor: '#fafaf2',
          width: 300,
        },
      }}
    >
      <Drawer.Screen
        name='Inicio'
        component={TabNavigator}
        options={{ drawerLabel: 'Inicio', headerShown: true }}
      />
      <Drawer.Screen name='Perfil' component={Perfil} />
      <Drawer.Screen name='Tweet' component={Tweet} />
      <Drawer.Screen name='Splash' component={SplashScreen} />
      {!signed && (
        <>
          <Drawer.Screen name='Login' component={LoginScreen} />
          <Drawer.Screen name='SignUp' component={SignUpScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <AuthProvider>
      <DrawerRoutes />
    </AuthProvider>
  );
}
