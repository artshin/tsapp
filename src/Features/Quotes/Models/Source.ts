import uuid from 'uuid'

export default class Source {
  public static schema = {
    name: 'Source',
    properties: {
      id: 'string',
    },
  }
  public id: string = uuid.v4()

  constructor() {
    /* empty */
  }
}
