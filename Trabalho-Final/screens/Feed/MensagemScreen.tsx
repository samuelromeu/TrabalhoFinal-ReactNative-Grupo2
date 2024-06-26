import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView, TextInput } from 'react-native'
import axios from 'axios';
import AuthContext from '../../service/AuthContext';

const MensagemScreen: React.FC = () => {
    const { signUp, errorMessage } = useContext(AuthContext);
    const [posts, setPosts] = useState<any[]>([]);
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [tags, setTags] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/mensagem');
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
      }
    };

    const handleSignUp = async () => {
      if (!mensagem || !nome || !tags) {
        setErrorMessage('Preencha todos os campos');
        return;
      }
      const newPost = { mensagem, nome, tags };
      await signUp(newPost);
      setMensagem('');
      setNome('');
      setTags('');
    };

    fetchData();
    }, []);

  const styles = StyleSheet.create({
      container: {
        padding: 10
      },
      post: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      body: {
        marginTop: 5
      }
    });

  return (
    <ScrollView>
      <View style={styles.container}>
        {posts.map((post: any) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.title}>{post.usuario.nome}</Text>
            <Text style={styles.body}>{post.mensagem}</Text>
          </View> 
        ))}
      </View>
      <View style={styles.post}>
        <Text style={styles.title}>Nova Mensagem</Text>
        <TextInput
          style={styles.body}
          placeholder="Mensagem"
          value={mensagem}
          onChangeText={setMensagem}
        />
        <TextInput
          style={styles.body}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.body}
          placeholder="Tags"
          value={tags}
          onChangeText={setTags}
        />
        <Button title="Enviar" onPress={handleSignUp} />
      </View>
    </ScrollView>
    );
};
