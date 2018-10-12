import { observable, action } from 'mobx'

export class NavigationStore {
  @observable
  public headerTitle = 'Index'
  @observable
  public navigationState = {
    index: 0,
    routes: [{ key: 'Index', routeName: 'Index' }],
  }

  // // NOTE: the second param, is to avoid stacking and reset the nav state
  // @action
  // public dispatch = (action, stackNavState = true) => {
  //   const previousNavState = stackNavState ? this.navigationState : null
  //   return (this.navigationState = AppNavigator.router.getStateForAction(action, previousNavState))
  // }
}
