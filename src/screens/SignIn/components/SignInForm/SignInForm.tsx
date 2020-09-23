// imports from vendors
import React, { FC, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Text } from 'react-native';
import { InputItem, List, Button } from '@ant-design/react-native';

// imports from modules
import { authenticate } from '../../../../modules/auth';

// imports from styles
import styles from './styles';

const reduxConnector = connect(null, { authenticate });

type Props = ConnectedProps<typeof reduxConnector>;

const SignInForm: FC<Props> = ({ authenticate }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    authenticate(email, password);
  };

  return (
    <>
      <List style={styles.list}>
        <InputItem type="email-address" placeholder="E-mail" value={email} onChange={setEmail} />
        <InputItem type="password" placeholder="Пароль" value={password} onChange={setPassword} />
      </List>
      <Button
        style={styles.submitButton}
        activeStyle={styles.submitButtonActive}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Войти</Text>
      </Button>
    </>
  );
};

export default reduxConnector(SignInForm);
