// imports from vendors
import React, { FC } from 'react';
import { ImageBackground, SafeAreaView, View, Text } from 'react-native';

// imports from components
import { Header } from '..';

// imports from styles
import styles from './styles';

type Props = {
  title?: string;
};

const AppLayout: FC<Props> = ({ children, title }) => (
  <ImageBackground
    source={require('../../../resources/images/background.png')}
    style={styles.background}
    resizeMode="cover"
  >
    <SafeAreaView>
      <View style={styles.content}>
        <Header />
        {title && <Text style={styles.title}>{title}</Text>}
        {children}
      </View>
    </SafeAreaView>
  </ImageBackground>
);

export default AppLayout;
