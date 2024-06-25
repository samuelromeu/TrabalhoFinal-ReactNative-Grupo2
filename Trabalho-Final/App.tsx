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
import Feed from './screens/Feed';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Feed/>
    // <NavigationContainer>
    //   <AuthProvider>
    //     <Routes></Routes>
    //   </AuthProvider>
    // </NavigationContainer>
  );
};

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Stack.Navigator initialRouteName={signed ? "Main" : "Login"}>
      {!signed ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <Stack.Screen name="Main" component={MainScreen} />
      )}
    </Stack.Navigator>
  );
};

export default App;
