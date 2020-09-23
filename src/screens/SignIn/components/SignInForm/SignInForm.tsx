// imports from vendors
import React, { FC, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button, Icon, Input } from '@ui-kitten/components';

// imports from modules
import { authenticate } from '../../../../modules/auth';

// imports from types
import { State } from '../../../../types/redux';

// imports from styles
import styles from './styles';

const reduxConnector = connect(({ auth }: State) => ({ auth }), { authenticate });

type Props = ConnectedProps<typeof reduxConnector>;

const SignInForm: FC<Props> = ({ auth, authenticate }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmit = () => {
    authenticate(email, password);
  };

  return (
    <View style={styles.form}>
      <Input
        textContentType="emailAddress"
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        value={password}
        placeholder="Пароль"
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry}
        accessoryRight={(props) => (
          <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
          </TouchableWithoutFeedback>
        )}
      />
      <Button onPress={handleSubmit} style={styles.submitButton}>
        Войти
      </Button>
    </View>
  );
};

export default reduxConnector(SignInForm);
