import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

export enum AppStatus {
  Initial = 'inital',
  Loading = 'loading',
  Ready = 'ready',
  Error = 'error',
}

// Actions
enum AppActionTypes {
  UPDATE_APP_STATUS = 'tsapp/app/UPDATE_APP_STATUS',
}

export const AppActions = {
  updateAppStatus: (appStatus: AppStatus) =>
    createAction(AppActionTypes.UPDATE_APP_STATUS, { appStatus }),
}

export type Actions = ActionsUnion<typeof AppActions>

export interface AppReducer {
  readonly appStatus: AppStatus
}

const InitialState: AppReducer = {
  appStatus: AppStatus.Initial,
}

export function appReducer(state: AppReducer = InitialState, action: Actions) {
  switch (action.type) {
    case AppActionTypes.UPDATE_APP_STATUS:
      return { ...state, appStatus: action.payload.appStatus }
    default:
      return state
  }
}
