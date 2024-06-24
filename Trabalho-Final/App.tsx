import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './routes/stackRoutes';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer >
      <StackRoutes />
    </NavigationContainer>
  );
}
