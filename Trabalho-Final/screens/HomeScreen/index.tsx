import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AuthContext from '../../service/AuthContext';
import ListUsers from '../../components/ListUsers';

const MainScreen: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, {user?.nome}!</Text>
      <Button title="Sair" onPress={signOut} />

      <ListUsers/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default MainScreen;
