import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { LandingScreen } from 'Screens/LandingScreen'

storiesOf('Screens', module).add('Landing', () => <LandingScreen />)
