import React from 'react'

import { storiesOf } from '@storybook/react-native'

import { LandingScreen } from '../Screens/LandingScreen'
import { LabeledValue } from '../Components/LabeledValue'

import '../Components/ExchangeScreen/story'
import '../Components/ExchangesScreen/story'

storiesOf('Screens', module).add('Landing', () => <LandingScreen />)

storiesOf('Components', module).add('Labeled Value', () => (
  <LabeledValue label={'BTC/USD'} value={'0.12345678'} />
))
