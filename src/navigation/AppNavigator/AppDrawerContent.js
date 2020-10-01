// imports from vendors
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Drawer, DrawerItem, ListItem } from '@ui-kitten/components';

const AppDrawerContent = ({ navigation }) => {
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
          title={() => <ListItem title="Услуги" onPress={handleItemPress('Services')} />}
        />
        <DrawerItem title={() => <ListItem title="Запись" />} />
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
});

export default AppDrawerContent;
