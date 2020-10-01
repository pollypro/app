import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../routes';
import { ForgetPassword, SignIn } from '../../screens';
import { AuthParamList } from './types';

const AuthStack = createStackNavigator<AuthParamList>();

const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName={Routes.SignIn} mode="card">
    <AuthStack.Screen
      name={Routes.SignIn}
      component={SignIn}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name={Routes.ForgetPassword}
      component={ForgetPassword}
      options={{ title: 'Forget Password' }}
    />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
