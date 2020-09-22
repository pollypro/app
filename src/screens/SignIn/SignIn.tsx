// imports from vendors
import React, { FC, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { View, ImageBackground, SafeAreaView, Image, Text } from 'react-native';
import { InputItem, List, Button } from '@ant-design/react-native';

// imports from modules
import { authenticate } from '../../modules/auth';

// imports from styles
import styles from './styles';

const reduxConnector = connect(null, { authenticate });

type Props = ConnectedProps<typeof reduxConnector>;

const SignIn: FC<Props> = ({ authenticate }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    authenticate(email, password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../resources/images/background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView>
          <View style={styles.content}>
            <Image source={require('./polly-logo.png')} style={styles.logo} />
            <List style={styles.list}>
              <InputItem
                type="email-address"
                placeholder="E-mail"
                value={email}
                onChange={setEmail}
              />
              <InputItem
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={setPassword}
              />
            </List>
            <Button
              style={styles.submitButton}
              activeStyle={styles.submitButtonActive}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Войти</Text>
            </Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default reduxConnector(SignIn);
