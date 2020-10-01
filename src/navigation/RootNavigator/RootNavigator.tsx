import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../AuthNavigator/AuthNavigation';
import AppNavigation from '../AppNavigator/AppNavigation';
import NavigationService from '../NavigationService';
import { State } from '../../types/redux';

const reduxConnector = connect(({ auth }: State) => ({ token: auth.token }));

type Props = ConnectedProps<typeof reduxConnector>;

const RootNavigator: FC<Props> = ({ token }) => (
  <NavigationContainer
    ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}
  >
    {token ? <AppNavigation /> : <AuthNavigator />}
  </NavigationContainer>
);

export default reduxConnector(RootNavigator);
