import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LandingScreen, LoadingScreen } from '../Containers'
import { FadeTransitionConfig } from '../Utils/Transitions'
import { BillsScreen } from '../Features/Bills'
import { HomeScreen } from '../Features/Home'

export enum Screens {
  Landing = 'Landing',
  Exchanges = 'Exchanges',
  Loading = 'Loading',
  Bills = 'Bills',
  Home = 'Home',
}

const MainNavigator = createStackNavigator(
  {
    [Screens.Landing]: LandingScreen,
    [Screens.Bills]: BillsScreen,
    [Screens.Home]: HomeScreen,
  },
  {
    initialRouteName: Screens.Landing,
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
