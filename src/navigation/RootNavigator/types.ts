import { AuthParamList } from '../AuthNavigator/types';
import { AppParamList } from '../AppNavigator/types';

export interface RootNavigatorProps {
  token?: string;
}

export type RootParamList = AuthParamList & AppParamList;
