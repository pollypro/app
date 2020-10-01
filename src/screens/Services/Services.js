// imports from vendors
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from modules
import { getServices, cleanupServices } from '../../modules/services';

// imports from styles
import styles from './styles';

const Services = ({ navigation, services, getServices, cleanupServices }) => {
  useEffect(() => {
    getServices();
    return () => {
      cleanupServices();
    };
  }, []);

  return (
    <AppLayout title="Услуги">
      <View style={styles.content}>
        {services.items.map((service) => (
          <View key={service.id} style={styles.service}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <View style={styles.delimiter} />
            <View style={styles.buttons}>
              <Button onPress={alert} containerStyle={styles.buttonContainer} style={styles.button}>
                Записаться
              </Button>
              <Button onPress={alert} containerStyle={styles.buttonContainer} style={styles.button}>
                Посмотреть вопросы
              </Button>
            </View>
          </View>
        ))}
      </View>
    </AppLayout>
  );
};

export default connect(({ services }) => ({ services }), { getServices, cleanupServices })(
  Services,
);
