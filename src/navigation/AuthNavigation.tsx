import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { SignIn } from '../screens';

const AuthStack = createStackNavigator<{}>();

const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName={Routes.SignIn} mode="card">
    <AuthStack.Screen name={Routes.SignIn} component={SignIn} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
