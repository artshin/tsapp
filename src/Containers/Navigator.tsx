import { createStackNavigator } from 'react-navigation'
import { ExchangesScreen, LandingScreen, LoadingScreen } from '../Screens'
import { FadeTransitionConfig } from '../Utils/Transitions'

export enum Screens {
  Landing = 'Landing',
  Exchanges = 'Exchanges',
  Loading = 'Loading',
}

const MainNavigator = createStackNavigator(
  {
    [Screens.Exchanges]: ExchangesScreen,
    [Screens.Landing]: LandingScreen,
  },
  {
    initialRouteName: Screens.Exchanges,
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
