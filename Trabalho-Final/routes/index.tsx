import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Feed from '../screens/Feed';
import Perfil from '../screens/Perfil';
import Search from '../screens/Search';
import Tweet from '../screens/Tweet';
import CustomDrawer from '../components/customDrawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Feed' 
        component={Feed}
        options={{
          tabBarActiveTintColor: '#00acee',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ color, size }) => (
            <Feather name="twitter" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name='Pesquisar' 
        component={Search}
        options={{
          tabBarActiveTintColor: '#00acee',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: "#00dae5",
          drawerInactiveBackgroundColor: "#fafaf2",
          drawerInactiveTintColor: "#ff0000",
          drawerActiveTintColor: "#00ff",
          drawerStyle: {
            backgroundColor: "#fafaf2",
            width: 240,
          },
        }}
      >
        <Drawer.Screen 
          name="Início" 
          component={TabNavigator} 
          options={{ drawerLabel: 'Início' }} 
        />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Tweet" component={Tweet} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}