import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { LandingScreen } from 'Screens/LandingScreen'
import { ExchangesScreen } from 'Screens/ExchangesScreen'
import { LabeledValue } from 'Components/LabeledValue'

storiesOf('Screens', module).add('Landing', () => <LandingScreen />)
storiesOf('Screens', module).add('Exchanges', () => <ExchangesScreen />)

storiesOf('Components', module).add('Labeled Value', () => <LabeledValue />)
