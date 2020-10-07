// imports from vendors
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Drawer, DrawerItem, Icon } from '@ui-kitten/components';
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
            <Button style={styles.button} onPress={handleItemPress('Results')}>
              <Icon
                style={styles.buttonIcon}
                fill="#414d55"
                name="checkmark-square-outline"
              />
              Результаты
            </Button>
          )}
        />
        <DrawerItem
          title={() => (
            <Button style={styles.button} onPress={handleItemPress('Tests')}>
              <Icon style={styles.buttonIcon} fill="#414d55" name="list-outline" />
              Тесты
            </Button>
          )}
        />
        <DrawerItem
          title={() => (
            <Button style={styles.button}>
              <Icon style={styles.buttonIcon} fill="#414d55" name="calendar-outline" />
              Записи
            </Button>
          )}
        />
        <DrawerItem
          title={() => (
            <Button style={styles.button} onPress={destroyAuth}>
              <Icon
                style={styles.buttonIcon}
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
  buttonIcon: {
    width: 16,
    height: 16,
    marginRight: 16,
  },
  button: {
    // font-family: Helvetica;
    fontSize: 16,
    color: '#414d55',
    lineHeight: 20,
  },
});

export default connect(null, { destroyAuth })(AppDrawerContent);
