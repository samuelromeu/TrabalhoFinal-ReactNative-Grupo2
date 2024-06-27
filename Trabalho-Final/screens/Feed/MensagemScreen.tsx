import React, { useContext, useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AuthContext from '../../service/AuthContext';

export const MensagemScreen: React.FC = () => {
  const { sigPost, errorMessage } = useContext(AuthContext);
  const [mensagem, setMensagem] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const { user } = useContext(AuthContext)

  const handleSignUp = async () => {
    if (!mensagem) {
      setLocalError('Todos os campos são obrigatórios.');
      return;
    }
    setLocalError(null);
    const nomeUsuario = user?.nome || 'Anônimo';
    const newPost = { mensagem, nomeUsuario };
    await sigPost(newPost);
  };

  return (
    <View style={styles.container}>
      {localError && <Text style={styles.error}>{localError}</Text>}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder='Mensagem'
        value={mensagem}
        onChangeText={setMensagem}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      /> */}
      <Button style={styles.Enviar} title='Enviar' onPress={handleSignUp} />
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
  Enviar: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
