import { Resource } from '../Types'

export class Bill extends Resource {
  public static schema = {
    name: 'Bill',
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
