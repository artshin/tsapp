import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ReduxState } from 'Reducers'
import { getBills } from '../Features/Bills/actions'
import { AppActions } from '../Reducers/AppReducer'
import Database from '../Database'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

export const loadAppData = (): ThunkResult<void> => async (dispatch, getState) => {
  dispatch(AppActions.loadAppRequest())

  try {
    await Database.open()
    await dispatch(getBills())
    dispatch(AppActions.loadAppSuccess())
  } catch (error) {
    if (typeof error === 'string') {
      dispatch(AppActions.loadAppFailure({ message: error }))
    } else {
      dispatch(AppActions.loadAppFailure({ message: 'unknown error' }))
    }
  }
}
