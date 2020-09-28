// imports from vendors
import React, { FC, useState, useEffect } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedProps, connect } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// imports from navigation
import RootNavigator from './src/navigation/RootNavigator/RootNavigator';

// imports from modules
import { getSelf } from './src/modules/self';
import { replaceAuth, destroyAuth } from './src/modules/auth';

import reduxStore from './src/reduxStore';

const reduxConnector = connect(null, { getSelf, replaceAuth, destroyAuth });

type Props = ConnectedProps<typeof reduxConnector>;

const Main: FC<Props> = ({ getSelf, replaceAuth, destroyAuth }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      const job = async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
          replaceAuth(token)
            .then(() => getSelf())
            .catch(() => replaceAuth(null))
            .then(() => setIsLoading(false));
        } else {
          destroyAuth().then(() => setIsLoading(false));
        }
      };

      job();
    }
  }, [isLoading]);

  if (!isLoading) {
    return (
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    );
  }

  return null;
};

const MainConnected = reduxConnector(Main);

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <ReduxProvider store={reduxStore}>
        <MainConnected />
      </ReduxProvider>
    </ApplicationProvider>
  </>
);

export default App;
