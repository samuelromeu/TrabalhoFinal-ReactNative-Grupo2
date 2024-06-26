import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@react-navigation/stack';
import { useAuth } from '../../contexts/AuthContext';

export default function Perfil() {
  
  const { user, signed } = useAuth();
  return ( 
    <SafeAreaView>
      <View  style={styles.Header} >
      <ImageBackground 
        source={require('../../assets/Fundo.jpg')} 
        style={styles.imagemFundo} 
      >
      <Image
        source={require('../../assets/FotoPerfil.png')} 
        style={styles.imagemPerfil} 
      />
      </ImageBackground>
            </View>

        <View style={styles.InfoPerfil}>
       <View>
        <Text style={styles.NomePerfil}>NomeUsuario</Text>
        <Text style={styles.ArrobaPerfil}>@Usario{user?.nome}</Text>
       </View>

      <TouchableOpacity style={styles.button} >
        <Text >Editar Perfil</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.Bio}>

          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero a libero pretium, vitae interdum libero aliquet. In hac habitasse platea dictumst.</Text>
        </View>
        <View style={styles.Seguidores}>

        <Text style={styles.NumeroSeguidoresInfo}>X </Text>

        <Text style={styles.SeguidoresInfo} >Seguidores  </Text>

        <Text style={styles.NumeroSeguidoresInfo} >20 </Text>

        <Text style={styles.SeguidoresInfo} >Seguindo</Text>
    </View>

    <View style={styles.line} />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemPerfil: {
    marginTop: 100,
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 10
  },
  imagemFundo: {
    width: '100%',
    height: 150,
  },
  Header: {
    marginBottom: 60,
  },
  NomePerfil: {
    fontSize: 18,
    fontWeight: 'bold', 
  },
  ArrobaPerfil: {
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    width: 115,
    height: 50,
    marginRight: 10,
  },
  InfoPerfil: {
    marginLeft:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  SeguidoresInfo: {
    
  },
  NumeroSeguidoresInfo: {
    fontWeight: 'bold', 
    fontSize: 15,

  },
  Seguidores: {
    marginLeft:20,
    flexDirection:'row',
  }, 
  line:{
    height: 2,
    width: '100%',
    backgroundColor: '#000',
    marginVertical: 20,
  }, 
  Bio: {
    marginVertical: 20,
    marginLeft: 20,
  }

});