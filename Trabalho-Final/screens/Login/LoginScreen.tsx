import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import AuthContext from '../../service/AuthContext';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const { signIn, errorMessage, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    await signIn(email, senha);
  };

  useEffect(() => {
    if (user) {
      navigation.navigate('Inicio'); // Navegue para a tela principal após o login bem-sucedido
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/twitter.png')}
        style={styles.logo}
      />
      <Text  style={styles.texticon}>Entrar no Twitter</Text>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#657786"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#657786"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonTextSing}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    borderColor: '#AAB8C2',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 12,
    paddingLeft: 20,
    backgroundColor: '#E1E8ED',
    fontSize: 16,
  },
  loginButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  signupButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextSing: {
    color: '#1DA1F2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'gray',
    marginBottom: 22,
    justifyContent: 'center',
  },
  texticon:{
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
  }
});


export default LoginScreen;