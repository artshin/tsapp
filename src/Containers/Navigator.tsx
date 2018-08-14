import { createStackNavigator } from 'react-navigation'
import { ExchangesScreen, LandingScreen } from 'Screens'

export const StackNavigator = createStackNavigator(
  {
    'ExchangesScreen': ExchangesScreen,
    'Landing': LandingScreen,
  },
  {
    initialRouteName: 'Landing',
  }
)
