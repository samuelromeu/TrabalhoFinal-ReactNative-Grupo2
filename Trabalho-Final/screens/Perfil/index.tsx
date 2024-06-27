import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../service/AuthContext';


export default function Perfil() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <View style={styles.Header}>
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
          <Text style={styles.NomePerfil}>{user?.nome || 'NomeUsuario'}</Text>
          <Text style={styles.ArrobaPerfil}>@{user?.nome || 'Usuario'}</Text>
        </View>
    
      </View>

      <View style={styles.Bio}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero a libero pretium, vitae interdum libero aliquet. In
          hac habitasse platea dictumst.
        </Text>
      </View>

      <View style={styles.Seguidores}>
        <Text style={styles.NumeroSeguidoresInfo}>X </Text>
        <Text style={styles.SeguidoresInfo}>Seguidores  </Text>
        <Text style={styles.NumeroSeguidoresInfo}>20 </Text>
        <Text style={styles.SeguidoresInfo}>Seguindo</Text>
      </View>

      <View style={styles.line} />

      <TouchableOpacity style={styles.Twittar} onPress={() => navigation.navigate("Tweet")}>
        <Text style={styles.TwittarText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  Header: {
    marginBottom: 60,
  },
  imagemPerfil: {
    marginTop: 100,
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 10,
  },
  imagemFundo: {
    width: '100%',
    height: 150,
  },
  NomePerfil: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ArrobaPerfil: {},
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
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SeguidoresInfo: {},
  NumeroSeguidoresInfo: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  Seguidores: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: '#000',
    marginVertical: 20,
  },
  Bio: {
    marginVertical: 20,
    marginLeft: 20,
  },
  Twittar: {
    borderRadius: 50,
    backgroundColor: '#1DA1F2',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  TwittarText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
