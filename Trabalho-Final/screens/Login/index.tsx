import { View, Text } from 'react-native'
import React from 'react'
import ListUsers from '../../components/ListUsers'
import LoginScreen from './LoginScreen'
import { SignUpScreen } from './SignUpScreen'

export default function Feed() {
  return (
    <View>
      <Text>Lista de Usuários</Text>
      <LoginScreen/>
      <ListUsers/>
      <SignUpScreen/>
    </View>
  )
}