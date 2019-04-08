import * as React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  NavigationInjectedProps,
} from 'react-navigation'
import { LandingScreen, LoadingScreen } from '../Containers'
import { FadeTransitionConfig } from '../Utils/Transitions'
import { BillsScreen } from '../Features/Bills'
import { BillScreen } from '../Features/Bill'
import { SettingsScreen } from '../Features/Settings'

export enum Screens {
  Landing = 'Landing',
  Exchanges = 'Exchanges',
  Loading = 'Loading',
  Bills = 'Bills',
  Home = 'Home',
  Tabs = 'Tabs',
  Bill = 'Bill',
  Settings = 'Settings',
}

const HomeStack = createStackNavigator(
  {
    [Screens.Bills]: BillsScreen,
  },
  {
    headerMode: 'none',
  },
)

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
})

const TabContainer = createAppContainer(
  createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack,
  }),
)

/// TabContainerWrapper is used to provide usage of navigationOptions per screen, instead of
/// providing a global resolution function in `createStackNavigator`
class TabContainerWrapper extends React.PureComponent<NavigationInjectedProps> {
  static router = TabContainer.router
  static navigationOptions = {
    header: null,
  }
  render() {
    const { navigation } = this.props

    return <TabContainer navigation={navigation} />
  }
}

const MainNavigator = createStackNavigator(
  {
    [Screens.Landing]: LandingScreen,
    [Screens.Tabs]: TabContainerWrapper,
    [Screens.Bill]: BillScreen,
  },
  {
    initialRouteName: Screens.Tabs,
    // headerMode: 'none',
  },
)

export const RootNavigator = createStackNavigator(
  {
    Main: MainNavigator,
    [Screens.Loading]: LoadingScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: FadeTransitionConfig,
  },
)

export const AppContainer = createAppContainer(RootNavigator)
