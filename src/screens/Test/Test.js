// imports from vendors
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { Spinner } from '@ui-kitten/components';
import { connect } from 'react-redux';
import Button from 'react-native-button';

// imports from components
import AppLayout from '../shared/AppLayout/AppLayout';

// imports from modules
import { getQuestions, cleanupQuestions } from '../../modules/questions';

// imports from styles
import styles from './styles';

const Test = ({ route, navigation, questions, getQuestions, cleanupQuestions }) => {
  const testId = route.params.testId;

  useFocusEffect(
    useCallback(() => {
      getQuestions(testId);
      return () => cleanupQuestions();
    }, [testId]),
  );

  return (
    <AppLayout renderBackButton title="Вопросы теста">
      <View style={styles.content}>
        {questions.isLoading && (
          <View style={styles.spinnerContainer}>
            <Spinner style={styles.spinner} />
          </View>
        )}
        {!questions.isLoading && (
          <>
            <ScrollView style={styles.questions}>
              {questions.items.map((item) => (
                <View key={item.id} styles={styles.questionBlock}>
                  <Text style={styles.questionText}>{item.question}</Text>
                  <View style={styles.delimiter} />
                </View>
              ))}
            </ScrollView>
            <Button
              onPress={() => navigation.navigate('Booking', { testId })}
              style={styles.buttonBook}
              containerStyle={styles.buttonBookContainer}
            >
              Записаться
            </Button>
          </>
        )}
      </View>
    </AppLayout>
  );
};

export default connect(({ questions }) => ({ questions }), {
  getQuestions,
  cleanupQuestions,
})(Test);
