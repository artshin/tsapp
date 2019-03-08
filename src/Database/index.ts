import Realm, { Configuration } from 'realm'
import { Bill } from '../Models'

import { Resource } from '../Types'

class Database {
  public realmInstance?: Realm
  private configuration: Configuration = {
    schema: [Bill],
  }

  public constructor() {
    /* empty */
  }

  public open = async () => {
    try {
      this.realmInstance = await Realm.open(this.configuration)
    } catch (error) {
      await this.deleteDatabase()
      await this.open()
      console.warn('database wiped due to development migration')
    }
  }

  public deleteDatabase = () => {
    Realm.deleteFile(this.configuration)
  }

  public get = <T extends Resource>(schemaName: string): T[] => {
    if (this.realmInstance) {
      Array.from(this.realmInstance.objects<T>(schemaName))
    }
    return []
  }

  public post = async <T extends Resource>(schemaName: string, data: T): Promise<T> => {
    return new Promise((resolve, reject) => {
      if (this.realmInstance) {
        this.realmInstance.write(() => {
          // force casting here since the check for null is outside the write block
          resolve(this.realmInstance!.create<T>(schemaName, data))
        })
      }
      reject(new Error('failed to write to database'))
    })
  }

  public patch = async <T extends Resource>(schemaName: string, data: T): Promise<T> => {
    return new Promise((resolve, reject) => {
      if (this.realmInstance) {
        this.realmInstance.write(() => {
          // force casting here since the check for null is outside the write block
          resolve(this.realmInstance!.create<T>(schemaName, data, true))
        })
      }
      reject(new Error('failed to update object in database'))
    })
  }

  public delete = async <T extends Resource>(data: T): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (this.realmInstance) {
        this.realmInstance.write(() => {
          // force casting here since the check for null is outside the write block
          resolve(this.realmInstance!.delete(data))
        })
      }
      reject(new Error('failed to update object in database'))
    })
  }
}

export default new Database()
