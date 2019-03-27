import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'
import { LandingScreen, LoadingScreen } from '../Containers'
import { FadeTransitionConfig } from '../Utils/Transitions'
import { BillsScreen } from '../Features/Bills'
import { SettingsScreen } from './SettingsScreen'

export enum Screens {
  Landing = 'Landing',
  Exchanges = 'Exchanges',
  Loading = 'Loading',
  Bills = 'Bills',
  Home = 'Home',
  Tabs = 'Tabs',
}

const HomeStack = createStackNavigator({
  [Screens.Bills]: BillsScreen,
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
})

const TabContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Settings: SettingsStack,
    },
    {},
  ),
)

const MainNavigator = createStackNavigator(
  {
    [Screens.Landing]: LandingScreen,
    [Screens.Tabs]: TabContainer,
  },
  {
    initialRouteName: Screens.Landing,
    headerMode: 'none',
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
