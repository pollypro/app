import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../routes';

export type AuthParamList = {
  [Routes.SignIn]: undefined;
  [Routes.ForgetPassword]: undefined;
};

export type AuthNavigationProps<P, R extends keyof AuthParamList> = P & {
  navigation: StackNavigationProp<AuthParamList, R>;
  route: RouteProp<AuthParamList, R>;
};
