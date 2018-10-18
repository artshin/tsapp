import { observable, action } from 'mobx'
import {
  NavigationScreenProp,
  NavigationState,
  NavigationContainerComponent,
  NavigationAction,
  NavigationParams,
  NavigationNavigateAction,
} from 'react-navigation'
import Reactotron from 'reactotron-react-native'

export class NavigationStore {
  @observable.ref
  public navigation: NavigationScreenProp<NavigationState> | undefined

  @action.bound
  public createRef(
    ref: NavigationContainerComponent & { _navigation: NavigationScreenProp<NavigationState> },
  ) {
    this.navigation = ref._navigation
  }

  @action.bound
  public dispatch(navAction: NavigationAction) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.dispatch(navAction)
  }

  @action.bound
  public getParam(paramName: string, fallback?: NavigationParams) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.getParam(paramName, fallback)
  }

  @action.bound
  public setParams(newParams: NavigationParams) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.setParams(newParams)
  }

  @action.bound
  public navigate(
    routeNameOrOptions:
      | string
      | {
          routeName:
            | string
            | {
                routeName: string
                params?: NavigationParams
                action?: NavigationAction
                key?: string
              }
          params?: NavigationParams
          action?: NavigationAction
          key?: string
        },
    params?: NavigationParams,
    navAction?: NavigationAction,
  ) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.navigate(routeNameOrOptions as string, params, navAction)
  }

  @action.bound
  public push(routeName: string, params?: NavigationParams, navAction?: NavigationAction) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.push(routeName, params, navAction as NavigationNavigateAction)
  }

  @action.bound
  public replace(routeName: string, params?: NavigationParams, navAction?: NavigationAction) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.replace(routeName, params, navAction as NavigationNavigateAction)
  }

  @action.bound
  public goBack(routeKey?: string | null) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.goBack(routeKey)
  }

  @action.bound
  public pop(n?: number, params?: { immediate?: boolean }) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.pop(n, params)
  }

  @action.bound
  public popToTop(params?: { immediate?: boolean }) {
    if (!this.navigation) {
      throw new Error('please create navigation refs first.')
    }
    this.navigation.popToTop(params)
  }
}
