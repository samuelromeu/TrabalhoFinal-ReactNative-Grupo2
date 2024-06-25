import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../service/api';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  bio: string;
}

const ListUsers: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get<Usuario[]>('/usuario');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.bio}>{item.bio}</Text>
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

export default ListUsers;
