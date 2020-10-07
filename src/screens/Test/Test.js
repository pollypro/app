// imports from vendors
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from modules
import { getQuestions, cleanupQuestions } from '../../modules/questions';

// imports from styles
import styles from './styles';

const Test = ({ route, questions, getQuestions, cleanupQuestions }) => {
  const testId = route.params.testId;

  useFocusEffect(
    useCallback(() => {
      getQuestions(testId);
      return () => cleanupQuestions();
    }, [testId]),
  );

  return (
    <AppLayout renderBackButton title="Вопросы теста">
      <ScrollView style={styles.content}>
        {questions.items.map((item) => (
          <View key={item.id} styles={styles.questionBlock}>
            <Text style={styles.questionText}>{item.question}</Text>
            <View style={styles.delimiter} />
          </View>
        ))}
      </ScrollView>
    </AppLayout>
  );
};

export default connect(({ questions }) => ({ questions }), {
  getQuestions,
  cleanupQuestions,
})(Test);
