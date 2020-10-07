// imports from vendors
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Drawer, DrawerItem, Icon, ListItem } from '@ui-kitten/components';
import Button from 'react-native-button';

// imports from modules
import { destroyAuth } from '../../modules/auth';

const AppDrawerContent = ({ navigation, destroyAuth }) => {
  const handleItemPress = (screen) => () => {
    navigation.toggleDrawer();
    navigation.navigate(screen);
    return;
  };

  return (
    <Drawer contentContainerStyle={styles.drawer}>
      <SafeAreaView>
        <DrawerItem
          title={() => (
            <ListItem title="Результаты" onPress={handleItemPress('Results')} />
          )}
        />
        <DrawerItem
          title={() => <ListItem title="Тесты" onPress={handleItemPress('Tests')} />}
        />
        <DrawerItem title={() => <ListItem title="Запись" />} />
        <DrawerItem
          title={() => (
            <Button style={styles.logoutButton} onPress={destroyAuth}>
              <Icon
                style={styles.logoutIcon}
                fill="#414d55"
                name="close-circle-outline"
              />
              Выйти
            </Button>
          )}
        />
      </SafeAreaView>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  drawer: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoutIcon: {
    width: 16,
    height: 16,
    marginRight: 16,
  },
  logoutButton: {
    // font-family: Helvetica;
    fontSize: 16,
    color: '#414d55',
    lineHeight: 20,
  },
});

export default connect(null, { destroyAuth })(AppDrawerContent);
