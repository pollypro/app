// imports from vendors
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// imports from navigation
import RootNavigator from './src/navigation/RootNavigator/RootNavigator';

import reduxStore from './src/reduxStore';

const App = () => (
  <ReduxProvider store={reduxStore}>
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  </ReduxProvider>
);

export default App;
