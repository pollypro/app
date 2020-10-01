// imports from vendors
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { Icon } from '@ui-kitten/components';
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

  const getServiceStyle = (i) =>
    i + 1 < services.items.length
      ? [styles.service, styles.serviceMargin]
      : styles.service;

  return (
    <AppLayout title="Услуги">
      <View style={styles.content}>
        {services.items.map((service, i) => (
          <View key={service.id} style={getServiceStyle(i)}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <View style={styles.delimiter} />
            <View style={styles.buttons}>
              <Button
                onPress={alert}
                containerStyle={styles.buttonContainer}
                style={styles.button}
              >
                <Icon style={styles.icon} fill="#2662f0" name="calendar-outline" />
                Записаться
              </Button>
              <Button
                onPress={() => navigation.navigate('Service', { serviceId: service.id })}
                containerStyle={styles.buttonContainer}
                style={styles.button}
              >
                Посмотреть вопросы
              </Button>
            </View>
          </View>
        ))}
      </View>
    </AppLayout>
  );
};

export default connect(({ services }) => ({ services }), {
  getServices,
  cleanupServices,
})(Services);
