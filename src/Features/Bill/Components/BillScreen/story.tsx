import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { BillScreen } from './index'
import { withReduxForm } from '../../../../Storybook/redux-form'

storiesOf('Screens', module)
  .addDecorator(withReduxForm)
  .add('Bill', () => {
    return (
      <BillScreen
        transactions={[
          { id: '0', total: 1000, title: '416 Bar' },
          { id: '1', total: 15.43, title: 'Drom' },
        ]}
      />
    )
  })
