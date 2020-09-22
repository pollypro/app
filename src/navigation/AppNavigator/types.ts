import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Routes } from '../routes';

export type AppParamList = {
  [Routes.Services]: undefined;
};

export type AppNavigationProps<P, R extends keyof AppParamList> = P & {
  navigation: DrawerNavigationProp<AppParamList, R>;
  route: RouteProp<AppParamList, R>;
};
