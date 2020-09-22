import React, { FC } from 'react';
import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';

const SignIn: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../resources/images/background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView>
          <View style={styles.content}>
            <Text>Sign in screen</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
