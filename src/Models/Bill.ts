import uuidV4 from 'uuid/v4'

export class Bill {
  public id: string
  public title: string

  constructor(title: string) {
    this.id = uuidV4()
    this.title = title
  }
}
