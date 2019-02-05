import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { LandingScreen } from './index'

storiesOf('Screens', module).add('Landing', () => {
  return <LandingScreen loading/>
})
