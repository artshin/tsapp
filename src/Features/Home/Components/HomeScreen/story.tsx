import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { HomeScreen } from './index'

storiesOf('Screens', module).add('Home', () => {
  return <HomeScreen />
})
