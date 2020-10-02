// imports from vendors
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from modules
import { getQuestions, cleanupQuestions } from '../../modules/questions';

const Test = ({ route, getQuestions, cleanupQuestions }) => {
  const testId = route.params.testId;

  useEffect(() => {
    getQuestions(testId);
    return () => {
      cleanupQuestions();
    };
  }, [testId]);

  return (
    <AppLayout renderBackButton>
      <View>
        <Text>Service screen</Text>
      </View>
    </AppLayout>
  );
};

export default connect(null, { getQuestions, cleanupQuestions })(Test);
