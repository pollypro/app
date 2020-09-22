import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from '../routes';
import { Service, Services } from '../../screens';
import { AppParamList } from './types';

const AppDrawer = createDrawerNavigator<AppParamList>();
const ServicesStack = createStackNavigator<{ Services: undefined; Service: undefined }>();

const ServicesStackNavigator = () => (
  <ServicesStack.Navigator>
    <ServicesStack.Screen name="Services" component={Services} />
    <ServicesStack.Screen name="Service" component={Service} />
  </ServicesStack.Navigator>
);

const AppDrawerNavigator = () => (
  <AppDrawer.Navigator initialRouteName={Routes.Services}>
    <AppDrawer.Screen name={Routes.Services} component={ServicesStackNavigator} />
  </AppDrawer.Navigator>
);

export default AppDrawerNavigator;
