import { Resource } from '../Types'

export class Bill extends Resource {
  public static schema = {
    name: 'Bill',
    properties: {
      id: 'string',
      text: 'string',
    },
  }
  public title: string

  constructor(title: string) {
    super()
    this.title = title
  }
}
