import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import { Routes } from './routes';
import { AppParamList } from './AppNavigator/types';

type Navigator = NavigationContainerRef | null;

class NavigationService {
  private _navigator: Navigator;

  public constructor() {
    this._navigator = null;
  }

  public setTopLevelNavigator(navigator: Navigator): void {
    this._navigator = navigator;
  }

  protected get navigator() {
    return this._navigator;
  }

  public navigate<R extends Routes>(routeName: R, params?: AppParamList[R]) {
    this.navigator?.navigate({ name: routeName, params });
  }

  public goBack() {
    this.navigator?.goBack();
  }

  public push<R extends Routes>(routeName: R, params?: AppParamList[R]) {
    this.navigator?.dispatch(StackActions.push(routeName, params));
  }

  public pop(numberOfScreens = 0) {
    this.navigator?.dispatch(StackActions.pop(numberOfScreens));
  }

  // public replace<R extends Routes>(routeName: R, params?: AppParamList[R]) {
  //     this.navigator?.replace(routeName, params)
  // }
}

export default new NavigationService();
