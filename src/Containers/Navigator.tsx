import { createStackNavigator } from 'react-navigation'
import { LandingScreen, LoadingScreen } from '../Containers'
import { FadeTransitionConfig } from '../Utils/Transitions'
import { ExchangesScreen } from '../Features/Exchanges'

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
