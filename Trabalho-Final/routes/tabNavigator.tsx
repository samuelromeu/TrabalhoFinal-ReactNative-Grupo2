import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Feed from '../screens/Feed';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
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
        name="Pesquisar"
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