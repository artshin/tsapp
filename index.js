import { AppRegistry } from 'react-native'
import App from './App'
import appData from './app.json'
import StorybookUIHMRRoot from './src/Storybook'

// Storybook
// AppRegistry.registerComponent(appData.name, () => StorybookUIHMRRoot)

// App
AppRegistry.registerComponent(appData.name, () => App)
