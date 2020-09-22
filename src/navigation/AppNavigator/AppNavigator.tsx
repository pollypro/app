import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../authNavigator';
import NavigationService from '../navigationService';

const AppNavigator: FC = () => (
  <NavigationContainer ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}>
    <AuthNavigator />
  </NavigationContainer>
);
