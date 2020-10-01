// imports from vendors
import React, { FC } from 'react';
import { ImageBackground, SafeAreaView, View, Text } from 'react-native';

// imports from components
import { Header } from '..';

// imports from styles
import styles from './styles';

type Props = {
  title?: string;
  renderBackButton?: boolean;
};

const AppLayout: FC<Props> = ({ children, title, renderBackButton = false }) => (
  <ImageBackground
    source={require('../../../resources/images/background.png')}
    style={styles.background}
    resizeMode="cover"
  >
    <SafeAreaView>
      <View style={styles.content}>
        <Header renderBackButton={renderBackButton} />
        {title && <Text style={styles.title}>{title}</Text>}
        {children}
      </View>
    </SafeAreaView>
  </ImageBackground>
);

export default AppLayout;
