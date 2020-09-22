import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../routes';
import { SignIn } from '../../screens';
import { AuthParamList } from './types';

const AuthStack = createStackNavigator<AuthParamList>();

const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName={Routes.SignIn} mode="card">
    <AuthStack.Screen name={Routes.SignIn} component={SignIn} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
