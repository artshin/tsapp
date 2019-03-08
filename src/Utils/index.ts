export * from './Metrics'
export * from './Colors'
export * from './Fonts'

export const anyErrorToString = (error: any): string => {
  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === 'string') {
    return error
  }

  return 'unknown error'
}
