import { Action } from 'redux'

export interface ErrorReducer {
  [index: string]: string | undefined
}

interface ErrorPayloadAction extends Action {
  payload: {
    message: string
  }
}

// Reducer
export function errorReducer(state: ErrorReducer = {}, action: ErrorPayloadAction | any) {
  const { type, payload } = action
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type)

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state

  const [, requestName, requestState] = matches
  return {
    ...state,
    // Store errorMessage
    // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
    //      else clear errorMessage when receiving GET_TODOS_REQUEST
    [requestName]: requestState === 'FAILURE' ? payload.message : undefined,
  }
}
