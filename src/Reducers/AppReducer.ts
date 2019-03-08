import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

// Actions
export enum AppActionTypes {
  LOAD_APP_REQUEST = 'tsapp/app/LOAD_APP_REQUEST',
  LOAD_APP_SUCCESS = 'tsapp/app/LOAD_APP_SUCCESS',
  LOAD_APP_FAILURE = 'tsapp/app/LOAD_APP_FAILURE',
}

export const LoadAppStateName = 'tsapp/app/LOAD_APP'

export const AppActions = {
  loadAppRequest: () => createAction(AppActionTypes.LOAD_APP_REQUEST),
  loadAppSuccess: () => createAction(AppActionTypes.LOAD_APP_SUCCESS),
  loadAppFailure: ({ message }: { message: string }) =>
    createAction(AppActionTypes.LOAD_APP_FAILURE, { message }),
}

export type Actions = ActionsUnion<typeof AppActions>

export interface AppReducer {}

const InitialState: AppReducer = {}

export function appReducer(state: AppReducer = InitialState, action: Actions) {
  switch (action.type) {
    default:
      return state
  }
}
