// imports from vendors
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from modules
import { getQuestions, cleanupQuestions } from '../../modules/questions';

const Service = ({ route, getQuestions, cleanupQuestions }) => {
  const serviceId = route.params.serviceId;

  useEffect(() => {
    getQuestions(serviceId);
    return () => {
      cleanupQuestions();
    };
  }, [serviceId]);

  return (
    <AppLayout renderBackButton>
      <View>
        <Text>Service screen</Text>
      </View>
    </AppLayout>
  );
};

export default connect(null, { getQuestions, cleanupQuestions })(Service);
