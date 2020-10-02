import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Result, Results, Test, Tests } from '../../screens';
import AppDrawerContent from './AppDrawerContent';

const AppDrawer = createDrawerNavigator();
const TestsStack = createStackNavigator();
const ResultsStack = createStackNavigator();

const ResultsStackStackNavigator = () => (
  <ResultsStack.Navigator>
    <ResultsStack.Screen
      name="Results"
      component={Results}
      options={{ headerShown: false }}
    />
    <ResultsStack.Screen
      name="Result"
      component={Result}
      options={{ headerShown: false }}
    />
  </ResultsStack.Navigator>
);

const TestsStackNavigator = () => (
  <TestsStack.Navigator>
    <TestsStack.Screen name="Tests" component={Tests} options={{ headerShown: false }} />
    <TestsStack.Screen name="Test" component={Test} options={{ headerShown: false }} />
  </TestsStack.Navigator>
);

const AppDrawerNavigator = () => (
  <AppDrawer.Navigator
    initialRouteName="Tests"
    drawerContent={(props) => <AppDrawerContent {...props} />}
  >
    <AppDrawer.Screen name="Tests" component={TestsStackNavigator} />
    <AppDrawer.Screen name="Results" component={ResultsStackStackNavigator} />
  </AppDrawer.Navigator>
);

export default AppDrawerNavigator;
