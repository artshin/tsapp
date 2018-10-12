import { createStackNavigator } from 'react-navigation'
import { ExchangesScreen, LandingScreen } from '../Screens'

export const StackNavigator = createStackNavigator(
  {
    Exchanges: ExchangesScreen,
    Landing: LandingScreen,
  },
  {
    initialRouteName: 'Landing',
  },
)
