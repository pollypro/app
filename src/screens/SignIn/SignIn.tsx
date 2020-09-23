// imports from vendors
import React, { FC } from 'react';
import { Image } from 'react-native';

// import components
import { ScreenLayout } from '../shared';
import { SignInForm } from './components';

// imports from styles
import styles from './styles';

const SignIn: FC = () => (
  <ScreenLayout centered>
    <Image source={require('./polly-logo.png')} style={styles.logo} />
    <SignInForm />
  </ScreenLayout>
);

export default SignIn;
