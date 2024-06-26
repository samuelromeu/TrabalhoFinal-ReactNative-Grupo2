// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import StackRoutes from './routes/stackRoutes';
// import Routes from './routes';

// export default function App() {
//   return (
//     <Routes></Routes>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider} from './service/AuthContext';
import {useAuth} from './service/AuthContext';
import LoginScreen from './screens/Login/LoginScreen';
import { SignUpScreen } from './screens/Login/SignUpScreen';
import MainScreen from './screens/HomeScreen';
import StackRoutes from './routes/stackRoutes';
import Feed from './screens/Feed';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
