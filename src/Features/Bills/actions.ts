import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ReduxState } from '../../Reducers'
import { Bill } from '../../Models'
import {
  getResources,
  postResource,
  patchResource,
  deleteResource,
} from '../../Actions/ResourceListActions'
import { Errors } from './constants'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

const postBillValidationBlock = (bill: Bill): string[] => {
  const errors = []
  if (bill.title.length === 0) {
    errors.push(Errors.EmptyBillTitleValidationErrror)
  }
  if (bill.title.length > 256) {
    errors.push(Errors.LongBillTitleValidationErrror)
  }
  return errors
}

export const getBills = (): ThunkResult<void> => async dispatch =>
  dispatch(getResources(Bill.schema.name))
export const postBill = (bill: Bill): ThunkResult<void> => async dispatch =>
  dispatch(postResource(Bill.schema.name, bill, postBillValidationBlock))
export const patchBill = (bill: Bill): ThunkResult<void> => async dispatch =>
  dispatch(patchResource(Bill.schema.name, bill))
export const deleteBill = (bill: Bill): ThunkResult<void> => async dispatch =>
  dispatch(deleteResource(Bill.schema.name, bill))
