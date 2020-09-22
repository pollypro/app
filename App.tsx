// imports from vendors
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator/AppNavigator';

const App = () => (
  <SafeAreaProvider>
    <AppNavigator />
  </SafeAreaProvider>
);

export default App;
