//COLOCAR PARA PUXAR O NOME DA PESSOA PELO LOGIN

import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AuthContext from '../../service/AuthContext';
import { RootStackParamList } from '../../App';

export const MensagemScreen: React.FC = () => {
  const { sigPost, errorMessage, post } = useContext(AuthContext);
  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const { user } = useContext(AuthContext);

  const handleSignUp = async () => {
    if (!mensagem) {
      setLocalError('Todos os campos são obrigatórios.');
      return;
    }
    setLocalError(null);
    const nome = user?.nome;
    const newPost = { mensagem, nome};
    await sigPost(newPost);
  };


  return (
    <View style={styles.container}>
      {localError && <Text style={styles.error}>{localError}</Text>}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Mensagem"
        value={mensagem}
        onChangeText={setMensagem}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      /> */}
      <Button title="Enviar" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});