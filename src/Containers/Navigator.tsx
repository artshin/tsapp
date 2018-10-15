import { createStackNavigator } from 'react-navigation'
import { ExchangesScreen, LandingScreen, LoadingScreen } from '../Screens'
import { FadeTransitionConfig } from '../Utils/Transitions'

export enum Screens {
  Landing = 'Landing',
  Exchanges = 'Exchanges',
  Loading = 'Loading',
}

const MainStack = createStackNavigator(
  {
    [Screens.Exchanges]: ExchangesScreen,
    [Screens.Landing]: LandingScreen,
  },
  {
    initialRouteName: Screens.Exchanges,
  },
)

export const RootStack = createStackNavigator(
  {
    Main: MainStack,
    [Screens.Loading]: LoadingScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: FadeTransitionConfig,
  },
)
