import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import api from '../../service/api';
import { FontAwesome } from '@expo/vector-icons';
import LikeButton from '../../components/LikeButton';

interface Mensagem {
  id: number;
  nomeUsuario: string;
  mensagem: string;
}

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [filteredMensagens, setFilteredMensagens] = useState<Mensagem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMensagens = async () => {
      setLoading(true);
      try {
        const response = await api.get<Mensagem[]>('/post');
        setMensagens(response.data);
      } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMensagens();
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = mensagens.filter((mensagem) =>
        mensagem.mensagem.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMensagens(filtered);
    } else {
      setFilteredMensagens([]);
    }
  }, [query, mensagens]);

  const renderItem = ({ item }: { item: Mensagem }) => (
    <View style={styles.messageContainer}>
      <View style={styles.separator} />
      <View style={styles.messageContent}>
        <View style={styles.userInfo}>
          <Text style={styles.authorName}>{item.nomeUsuario}</Text>
        </View>
        <Text style={styles.messageText}>{item.mensagem}</Text>
        <LikeButton />
      </View>
      <View style={styles.separator} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Buscar mensagens...'
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setQuery(query)}
          disabled={loading}
        >
          <FontAwesome name='search' size={24} color='#1DA1F2' />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#1DA1F2" />
      ) : (
        <FlatList
          data={filteredMensagens}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  messageContainer: {
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default SearchScreen;
