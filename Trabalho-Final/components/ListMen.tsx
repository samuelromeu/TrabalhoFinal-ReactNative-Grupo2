import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../service/api';
import LikeButton from './LikeButton';

interface Mensagem {
  mensagem: string;
}

const ListMensagens: React.FC = () => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);

  useEffect(() => {
    const fetchMensagens = async () => {
      try {
        const response = await api.get<Mensagem[]>('/post');
        setMensagens(response.data);
      } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
      }
    };

    fetchMensagens();
  }, []);

  const renderItem = ({ item }: { item: Mensagem }) => (
    <View style={styles.messageContainer}>
      <View style={styles.separator} />
      <View style={styles.messageContent}>
        <View style={styles.userInfo}>
          {/* <Image source={{ uri: item.autor.avatar }} style={styles.avatar} /> */}
          {/* <Text style={styles.authorName}>{item.autor.nome}</Text> */}
        </View>
        <Text style={styles.messageText}>{item.mensagem}</Text>
        <LikeButton />
      </View>
      <View style={styles.separator} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 5,
  },
});

export default ListMensagens;