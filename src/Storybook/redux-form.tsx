import React from 'react'
import { reduxForm, reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

export const withReduxForm = (story: any) => {
  const reducers = { form: formReducer }
  const reducer = combineReducers(reducers)
  const store = createStore(reducer)
  const Form = reduxForm({ form: 'withReduxForm' })(story)
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  )
}
