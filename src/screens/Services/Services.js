// imports from vendors
import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from styles
import styles from './styles';

const Services = ({ navigation }) => {
  return (
    <AppLayout title="Услуги">
      <View style={styles.content}>
        <Text>Services screen</Text>
      </View>
    </AppLayout>
  );
};

export default Services;
