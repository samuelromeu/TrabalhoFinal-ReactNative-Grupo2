import React, { createContext, useState, ReactNode, useContext } from 'react';
import axios from 'axios';
import api from '../service/api';
import { UserT} from '../types/UserT'

interface AuthContextData {
  signed: boolean;
  user: UserT | null;
  errorMessage: string | null;
  signIn(email: string, senha: string): Promise<void>;
  signOut(): void;
  signUp(newUser: Omit<UserT, 'id'>): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserT | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const signIn = async (email: string, senha: string) => {
    if (!email || !senha){
      setErrorMessage('Preencha todos os campos');
      return
    }
    try {
      const response = await api.get<UserT[]>('/usuario');
      const foundUser = response.data.find(u => u.email === email && u.senha === senha);
      if (foundUser) {
        setUser(foundUser);
        setErrorMessage(null);
      } else {
        setErrorMessage('Usuário não encontrado');
      }
    } catch (error) {
      setErrorMessage('Erro ao buscar usuários');
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const signOut = () => {
    setUser(null);
    setErrorMessage(null);
  };

  const signUp = async (newUser: Omit<UserT, 'id'>) => {
    try {
      const response = await api.post<UserT>('/usuario', { ...newUser, id: Math.random() });
      setUser(response.data);
      setErrorMessage(null);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Erro ao cadastrar usuário');
      }
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, errorMessage, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
