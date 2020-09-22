// imports from vendors
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// imports from navigation
import AppNavigator from './src/navigation/AppNavigator/AppNavigator';

import reduxStore from './src/reduxStore';

const App = () => (
  <ReduxProvider store={reduxStore}>
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  </ReduxProvider>
);

export default App;
