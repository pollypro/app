import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Result, Results, Service, Services } from '../../screens';
import AppDrawerContent from './AppDrawerContent';

const AppDrawer = createDrawerNavigator();
const ServicesStack = createStackNavigator();
const ResultsStack = createStackNavigator();

const ResultsStackStackNavigator = () => (
  <ResultsStack.Navigator>
    <ResultsStack.Screen name="Results" component={Results} options={{ headerShown: false }} />
    <ResultsStack.Screen name="Result" component={Result} options={{ headerShown: false }} />
  </ResultsStack.Navigator>
);

const ServicesStackNavigator = () => (
  <ServicesStack.Navigator>
    <ServicesStack.Screen name="Services" component={Services} options={{ headerShown: false }} />
    <ServicesStack.Screen name="Service" component={Service} options={{ headerShown: false }} />
  </ServicesStack.Navigator>
);

const AppDrawerNavigator = () => (
  <AppDrawer.Navigator
    initialRouteName="Services"
    drawerContent={(props) => <AppDrawerContent {...props} />}
  >
    <AppDrawer.Screen name="Services" component={ServicesStackNavigator} />
    <AppDrawer.Screen name="Results" component={ResultsStackStackNavigator} />
  </AppDrawer.Navigator>
);

export default AppDrawerNavigator;
