// imports from vendors
import React from 'react';
import { View } from 'react-native';
import { Icon } from '@ui-kitten/components';
import Button from 'react-native-button';
import { useNavigation } from '@react-navigation/native';

// imports from styles
import styles from './styles';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Button style={styles.button} onPress={() => navigation.openDrawer()}>
        <Icon name="menu-outline" style={styles.menuIcon} />
        Меню
      </Button>
    </View>
  );
};

export default Header;
