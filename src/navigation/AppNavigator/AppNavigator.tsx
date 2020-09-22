import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../AuthNavigator/AuthNavigation';
import NavigationService from '../NavigationService';

const AppNavigator: FC = () => (
  <NavigationContainer ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}>
    <AuthNavigator />
  </NavigationContainer>
);

export default AppNavigator;
