// imports from vendors
import React from 'react';
import { Text, View } from 'react-native';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from styles
import styles from './styles';

const Services = ({ navigation }) => {
  return (
    <AppLayout>
      <View style={styles.content}>
        <Text>Services screen</Text>
      </View>
    </AppLayout>
  );
};

export default Services;
