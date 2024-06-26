import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AuthContext from '../../service/AuthContext';
import { RootStackParamList } from '../../App';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC = () => {
  const { signUp, errorMessage, user } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [bio, setBio] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const handleSignUp = async () => {
    if (!nome || !email || !senha || !bio) {
      setLocalError('Todos os campos são obrigatórios.');
      return;
    }
    setLocalError(null);
    const newUser = { nome, email, senha, bio };
    await signUp(newUser);
  };

  useEffect(() => {
    if (user) {
      navigation.navigate('Inicio');
    }
  }, [user, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/twitter.png')}
        style={styles.logo}
      />
      <Text style={styles.texticon}>Cadastre-se no Twitter</Text>
      {localError && <Text style={styles.error}>{localError}</Text>}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#657786"
      />
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
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        placeholderTextColor="#657786"
      />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextLogin}>Já tem uma conta?</Text>
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
  signUpButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
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
  },
  loginButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextLogin: {
    color: '#1DA1F2',
    fontSize: 18,
    fontWeight: 'bold',
  }
});


export default SignUpScreen;