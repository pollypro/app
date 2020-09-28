// imports from vendors
import React, { FC } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

// imports from components
import { Header } from '..';

// imports from styles
import styles from './styles';

const AppLayout: FC = ({ children }) => (
  <ImageBackground
    source={require('../../../resources/images/background.png')}
    style={styles.background}
    resizeMode="cover"
  >
    <SafeAreaView>
      <Header />
      {children}
    </SafeAreaView>
  </ImageBackground>
);

export default AppLayout;
