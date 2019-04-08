import { Resource } from '../Types'

export class Transaction extends Resource {
  public static schema = {
    name: 'Transaction',
    properties: {
      id: 'string',
      title: 'string',
      total: 'number',
    },
  }
  public title: string
  public total: number = 0.0

  constructor(title: string) {
    super()
    this.title = title
  }
}
