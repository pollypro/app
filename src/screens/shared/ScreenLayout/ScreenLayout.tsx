// imports from vendors
import React, { FC } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

// imports from styles
import styles from './styles';

type Props = {
  centered?: boolean;
};

const ScreenLayout: FC<Props> = ({ centered = false, children }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../../../resources/images/background.png')}
      style={centered ? styles.backgroundCentered : styles.background}
      resizeMode="cover"
    >
      <SafeAreaView>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  </View>
);

export default ScreenLayout;
