import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AuthContext from '../../service/AuthContext';

export default function CustomDrawer(props: any) {
  const { user, signOut, signed } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          width: '100%',
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../../assets/Perfil.png')}
          style={{ width: 65, height: 65 }}
        />
        <Text style={{ fontSize: 18, marginTop: 5, color: '#000' }}>
          Bem vindo!
        </Text>
        <Text style={{ fontSize: 18, marginTop: 5, color: '#000' }}>
          {user?.nome || 'Visitante'}
        </Text>
        {signed && (
          <TouchableOpacity onPress={signOut}>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                fontSize: 16,
                marginBottom: 15,
              }}
            >
              Sair
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <DrawerItemList {...props} />   
    </DrawerContentScrollView>
  );
}
