import { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../service/AuthContext';

export const MensagemScreen: React.FC = () => {
  const navigation = useNavigation();
  const { sigPost, errorMessage, user } = useContext(AuthContext);
  const [mensagem, setMensagem] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (!mensagem) {
      setLocalError('Todos os campos são obrigatórios.');
      return;
    }
    setLocalError(null);
    const nomeUsuario = user?.nome || 'Anônimo';
    const newPost = { mensagem, nomeUsuario };
    await sigPost(newPost);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.enviarButton} onPress={handleSignUp}>
          <Text style={styles.pubicarText}>Publicar</Text>
        </TouchableOpacity>
      </View>
      {localError && <Text style={styles.error}>{localError}</Text>}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/FotoPerfil.png')}
          style={styles.profileImage}
        />
        <TextInput
          style={styles.input}
          placeholder='O que está acontecendo?'
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder='Mensagem'
        value={mensagem}
        onChangeText={setMensagem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    fontSize: 20,
    padding: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: -10,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  enviarButton: {
    width: '30%',
    height: 35,
    borderRadius: 25,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  closeButtonText: {
    fontSize: 22,
    marginLeft: 3,
    marginBottom: 2,
    transform: [{ scaleY: 0.8 }], 
  },
  pubicarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MensagemScreen;
