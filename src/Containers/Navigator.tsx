import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LandingScreen, LoadingScreen } from '../Containers'
import { FadeTransitionConfig } from '../Utils/Transitions'
import { ExchangesScreen } from '../Features/Exchanges'
import { BillsScreen } from '../Features/Bills'

export enum Screens {
  Landing = 'Landing',
  Exchanges = 'Exchanges',
  Loading = 'Loading',
  Bills = 'Bills',
}

const MainNavigator = createStackNavigator(
  {
    [Screens.Exchanges]: ExchangesScreen,
    [Screens.Landing]: LandingScreen,
    [Screens.Bills]: BillsScreen,
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
