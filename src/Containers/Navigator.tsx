import { createStackNavigator } from 'react-navigation'
import { LandingScreen } from 'Screens/LandingScreen'

export const StackNavigator = createStackNavigator(
  {
    Landing: LandingScreen,
  },
  {
    initialRouteName: 'Landing',
  }
)
