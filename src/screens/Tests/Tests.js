// imports from vendors
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from modules
import { getTests, cleanupTests } from '../../modules/tests';

// imports from styles
import styles from './styles';

const Tests = ({ navigation, tests, getTests, cleanupTests }) => {
  useEffect(() => {
    getTests();
    return () => {
      cleanupTests();
    };
  }, []);

  const getTestStyle = (i) =>
    i + 1 < tests.items.length ? [styles.test, styles.testMargin] : styles.test;

  return (
    <AppLayout title="Услуги">
      <View style={styles.content}>
        {tests.items.map((test, i) => (
          <View key={test.id} style={getTestStyle(i)}>
            <Text style={styles.testName}>{test.name}</Text>
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
                onPress={() => navigation.navigate('Test', { testId: test.id })}
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

export default connect(({ tests }) => ({ tests }), { getTests, cleanupTests })(Tests);
