import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ReduxState } from '../Reducers'
import Database from '../Database'
import keyBy from 'lodash/keyBy'
import { anyErrorToString } from '../Utils'
import { Resource, ResourceById } from '../Types'
import { ResourceListsActions, resourceInitialState } from '../Reducers/ResourceListReducer'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

export class DataSource {
  public static getResources = <T extends Resource>(schemaName: string): T[] => {
    return Database.get(schemaName)
  }

  public static postResource = async <T extends Resource>(
    schemaName: string,
    resource: T,
  ): Promise<T> => {
    return Database.post(schemaName, resource)
  }

  public static patchResource = async <T extends Resource>(
    schemaName: string,
    resource: T,
  ): Promise<T> => {
    return Database.patch(schemaName, resource)
  }

  public static deleteResource = async <T extends Resource>(resource: T): Promise<void> => {
    return Database.delete(resource)
  }
}

export const getResources = <T extends Resource>(
  resourceName: string,
): ThunkResult<void> => async dispatch => {
  dispatch(ResourceListsActions.getResourcesRequest(resourceName))
  try {
    const resources = DataSource.getResources<T>(resourceName)

    const resourcesById: ResourceById = keyBy(resources, el => el.id)
    const ids = resources.map(el => el.id)

    dispatch(ResourceListsActions.getResourcesSuccess(resourceName, resourcesById, ids))
  } catch (error) {
    dispatch(
      ResourceListsActions.getResourcesFailure(resourceName, { message: anyErrorToString(error) }),
    )
  }
}

export const DuplicateResourceError = 'Resource already exists'
export const postResource = <T extends Resource>(
  resourceName: string,
  resource: T,
  validationBlock?: (resource: T) => string[],
): ThunkResult<void> => async (dispatch, getState) => {
  dispatch(ResourceListsActions.postResourceRequest(resourceName))

  const { resources } = getState()
  const { byId: resourcesById } = resources[resourceName] || resourceInitialState

  try {
    if (resourcesById[resource.id]) {
      throw new Error(DuplicateResourceError)
    }

    if (validationBlock) {
      const validationErrors = validationBlock(resource)

      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(', '))
      }
    }

    const postedResource = await DataSource.postResource(resourceName, resource)

    dispatch(ResourceListsActions.postResourceSuccess(resourceName, postedResource))
  } catch (error) {
    dispatch(
      ResourceListsActions.postResourceFailure(resourceName, {
        message: anyErrorToString(error),
      }),
    )
  }
}

export const NoResourceToUpdateError = `Can't update non-existent resource`
export const patchResource = <T extends Resource>(
  resourceName: string,
  resource: T,
): ThunkResult<void> => async (dispatch, getState) => {
  dispatch(ResourceListsActions.patchResourceRequest(resourceName))

  const { resources } = getState()
  const { byId: resourcesById } = resources[resourceName] || resourceInitialState

  try {
    if (!resourcesById[resource.id]) {
      throw new Error(NoResourceToUpdateError)
    }

    const patchedResource = await DataSource.patchResource(resourceName, resource)

    dispatch(ResourceListsActions.patchResourceSuccess(resourceName, patchedResource))
  } catch (error) {
    dispatch(
      ResourceListsActions.patchResourceFailure(resourceName, {
        message: anyErrorToString(error),
      }),
    )
  }
}

export const NoResourceToDeleteError = `Can't delete non-existent resource`
export const deleteResource = <T extends Resource>(
  resourceName: string,
  resource: T,
): ThunkResult<void> => async (dispatch, getState) => {
  dispatch(ResourceListsActions.deleteResourceRequest(resourceName))

  const { resources } = getState()
  const { byId: resourcesById } = resources[resourceName] || resourceInitialState

  try {
    if (!resourcesById[resource.id]) {
      throw new Error(NoResourceToDeleteError)
    }

    await DataSource.deleteResource(resource)

    dispatch(ResourceListsActions.deleteResourceSuccess(resourceName, resource))
  } catch (error) {
    dispatch(
      ResourceListsActions.deleteResourceFailure(resourceName, {
        message: anyErrorToString(error),
      }),
    )
  }
}
