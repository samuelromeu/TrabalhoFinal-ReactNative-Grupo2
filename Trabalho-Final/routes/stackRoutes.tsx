import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';
import Perfil from '../screens/Perfil';
import Search from '../screens/Search';
import Tweet from '../screens/Tweet';
import Login from '../screens/Login';
import SplashScreen from '../screens/Splash';
import Routes from '.';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: 'Tela de Home Stack',
        }}
      />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Tweet" component={Tweet} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
    
  );
}



