import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ReduxState } from '../../Reducers'
import { Bill } from '../../Models'
import {
  getResources,
  postResource,
  patchResource,
  deleteResource,
  DataSourceProtocol,
} from 'redux-convenience-reducers'
import Database from '../../Database'

import { Errors } from './constants'

const DataSource: DataSourceProtocol<Bill> = {
  getResources: (schemaName: string): Bill[] => {
    return Database.get(schemaName)
  },

  postResource: async (schemaName: string, resource: Bill): Promise<Bill> => {
    return Database.post(schemaName, resource)
  },

  patchResource: async (schemaName: string, resource: Bill): Promise<Bill> => {
    return Database.patch(schemaName, resource)
  },

  deleteResource: async (_: string, resource: Bill): Promise<void> => {
    return Database.delete(resource)
  },
}

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
  dispatch(getResources(Bill.schema.name, DataSource))
export const postBill = (bill: Bill): ThunkResult<void> => async dispatch =>
  dispatch(postResource(Bill.schema.name, bill, DataSource, postBillValidationBlock))
export const patchBill = (bill: Bill): ThunkResult<void> => async dispatch =>
  dispatch(patchResource(Bill.schema.name, bill, DataSource))
export const deleteBill = (bill: Bill): ThunkResult<void> => async dispatch =>
  dispatch(deleteResource(Bill.schema.name, bill, DataSource))
