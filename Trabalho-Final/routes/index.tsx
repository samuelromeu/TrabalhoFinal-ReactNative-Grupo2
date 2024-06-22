import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import Feed from '../screens/Feed';
import Perfil from '../screens/Perfil';
import Search from '../screens/Search';
import Tweet from '../screens/Tweet';
import Login from '../screens/Login'
import StackRoutes from "./stackRoutes"


export default function Routes() {

    const Tab =  createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
 
                <Tab.Screen name='Feed' component={Feed}
                   options={{
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="file-text" color={color} size={size}/>;
                    },
                }}
                />
                <Tab.Screen name='Login' component={Login}
                   options={{
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="phone-call" color={color} size={size}/>;
                    },
                }}
                />
                                <Tab.Screen name='Perfil' component={Perfil}
                   options={{
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="phone-call" color={color} size={size}/>;
                    },
                }}
                />
                                <Tab.Screen name='Search' component={Search}
                   options={{
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="phone-call" color={color} size={size}/>;
                    },
                }}
                />
                                <Tab.Screen name='Tweet' component={Tweet}
                   options={{
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="phone-call" color={color} size={size}/>;
                    },
                }}
                />

        </Tab.Navigator>
    </NavigationContainer>
  )
}