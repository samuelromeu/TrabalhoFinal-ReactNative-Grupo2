import React, { createContext, useState, ReactNode, useContext } from 'react';
import axios from 'axios';
import api from './api';
import { UserT } from '../types/UserT'
import { PostT } from '../types/PostT'

interface AuthContextData {
  signed: boolean;
  user: UserT | null;
  errorMessage: string | null;
  post: PostT | null;
  signIn(email: string, senha: string): Promise<void>;
  signOut(): void;
  signUp(newUser: Omit<UserT, 'id'>): Promise<void>;
  sigPost(newPost: Omit<PostT, 'id'>): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserT | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [post, setPost] = useState<PostT | null>(null);
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const signIn = async (email: string, senha: string) => {
    if (!email || !senha) {
      setErrorMessage('Preencha todos os campos');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Formato de e-mail inválido');
      return;
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
    if (!validateEmail(newUser.email)) {
      setErrorMessage('Formato de e-mail inválido');
      return;
    }
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

  const sigPost = async (newPost: Omit<PostT, 'id'>) => {
    try {
      const response = await api.post<PostT>('/post', { ...newPost, id: Math.random() });
      setPost(response.data);
      setErrorMessage(null);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Erro ao cadastrar mensagem');
      }
      console.error('Erro ao cadastrar mensagem:', error);
    }
  };
  return (
    <AuthContext.Provider value={{ signed: !!user, user, post, errorMessage, signIn, signOut, signUp, sigPost }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

