import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../service/api';

interface Mensagem {
  mensagem: string;
}

const ListMensagens: React.FC = () => {
    const [mensagem, setMensagem] = useState<Mensagem[]>([]);
  
    
  
    useEffect(() => {
      const fetchMensagens = async () => {
        try {
          const response = await api.get<Mensagem[]>('/post');
          setMensagem(response.data);
        } catch (error) {
          console.error('Erro ao buscar usuários:', error);
        }
      };
  
      fetchMensagens();
    }, []);

    return (
        <View style={styles.container}>
          <FlatList
            data={mensagem}
            renderItem={({ item }) => (
              <View style={styles.userContainer}>
                <Text style={styles.name}>{item.mensagem}</Text>
              </View>
            )}
          />
        </View>
      );
    };
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    userContainer: {
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 16,
      color: '#555',
    },
    bio: {
      fontSize: 14,
      color: '#777',
    },
  });
  
  export default ListMensagens;
  