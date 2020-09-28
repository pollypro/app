// imports from vendors
import React from 'react';
import { View } from 'react-native';
import { Icon, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

// imports from styles
import styles from './styles';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Button
        appearance="ghost"
        onPress={() => navigation.openDrawer()}
        accessoryLeft={(props) => (
          <Icon {...props} name="menu-outline" style={styles.menuIcon} fill="#2662F0" />
        )}
      >
        Меню
      </Button>
    </View>
  );
};

export default Header;
