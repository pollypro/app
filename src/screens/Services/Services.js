// imports from vendors
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { connect } from 'react-redux';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from modules
import { getServices, cleanupServices } from '../../modules/services';

// imports from styles
import styles from './styles';

const Services = ({ navigation, getServices, cleanupServices }) => {
  useEffect(() => {
    getServices();
    return () => {
      cleanupServices();
    };
  }, []);

  return (
    <AppLayout title="Услуги">
      <View style={styles.content}>
        <Text>Services screen</Text>
      </View>
    </AppLayout>
  );
};

export default connect(null, { getServices, cleanupServices })(Services);
