// imports from vendors
import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// imports from navigation
import RootNavigator from './src/navigation/RootNavigator/RootNavigator';

import reduxStore from './src/reduxStore';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <ReduxProvider store={reduxStore}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </ReduxProvider>
    </ApplicationProvider>
  </>
);

export default App;
