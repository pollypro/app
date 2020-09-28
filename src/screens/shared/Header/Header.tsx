// imports from vendors
import React, { FC } from 'react';
import { View } from 'react-native';
import { Icon, Button } from '@ui-kitten/components';

// imports from styles
import styles from './styles';

const Header: FC = () => (
  <View style={styles.header}>
    <Button
      appearance="ghost"
      accessoryLeft={(props) => (
        <Icon {...props} name="menu-outline" style={styles.menuIcon} fill="#2662F0" />
      )}
    >
      Меню
    </Button>
  </View>
);

export default Header;
