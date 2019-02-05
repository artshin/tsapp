import { AppRegistry } from 'react-native'
import App from './src/App'
import appData from './app.json'
import StorybookUIHMRRoot from './src/Storybook'
import Reactotron from 'reactotron-react-native'

// Storybook
AppRegistry.registerComponent(appData.name, () => StorybookUIHMRRoot)

// App
// AppRegistry.registerComponent(appData.name, () => App)
