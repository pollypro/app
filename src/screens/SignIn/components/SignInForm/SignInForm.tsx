// imports from vendors
import React, { FC, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button, Icon, Input, Text } from '@ui-kitten/components';

// imports from modules
import { authenticate, cleanupAuth } from '../../../../modules/auth';

// imports from types
import { State } from '../../../../types/redux';

// imports from styles
import styles from './styles';

const reduxConnector = connect(({ auth }: State) => ({ auth }), {
  authenticate,
  cleanupAuth,
});

type Props = ConnectedProps<typeof reduxConnector>;

const SignInForm: FC<Props> = ({ auth, authenticate, cleanupAuth }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmit = () => {
    authenticate(email, password);
  };

  const getTextChangeHandler = (stateDispatch: typeof setEmail | typeof setPassword) => (
    value: string,
  ) => {
    auth.error && cleanupAuth();
    stateDispatch(value);
  };

  return (
    <View style={styles.form}>
      <Input
        textContentType="emailAddress"
        placeholder="E-mail"
        value={email}
        onChangeText={getTextChangeHandler(setEmail)}
        status={auth.error ? 'danger' : 'basic'}
      />
      <Input
        value={password}
        placeholder="Пароль"
        onChangeText={getTextChangeHandler(setPassword)}
        secureTextEntry={secureTextEntry}
        accessoryRight={(props) => (
          <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
          </TouchableWithoutFeedback>
        )}
        status={auth.error ? 'danger' : 'basic'}
      />
      {auth.error && (
        <Text status="danger" style={{ alignSelf: 'center' }}>
          Неверный email или пароль
        </Text>
      )}
      <Button onPress={handleSubmit} style={styles.submitButton}>
        Войти
      </Button>
    </View>
  );
};

export default reduxConnector(SignInForm);
