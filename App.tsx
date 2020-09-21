// imports from vendors
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const App = () => (
  <SafeAreaView>
    <View style={styles.body}>
      <Text>Hello world</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  body: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
