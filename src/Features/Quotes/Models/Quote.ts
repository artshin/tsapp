import uuid from 'uuid'

export default class Quote {
  public static schema = {
    name: 'Quote',
    properties: {
      id: 'string',
      text: 'string',
    },
  }

  public id: string = uuid.v4()
  public text: string

  constructor(text: string) {
    this.text = text
  }
}
