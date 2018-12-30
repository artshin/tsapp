import Realm, { Configuration } from 'realm'
import { Quote, Source } from '../Features/Quotes/Models'
import Reactotron from 'reactotron-react-native'

class Database {
  private realmInstance?: Realm
  private configuration: Configuration = {
    schema: [Quote, Source],
  }

  public constructor() {
    /* empty */
  }

  public open = async () => {
    this.realmInstance = await Realm.open(this.configuration)
    Reactotron.log(this.realmInstance !== null)
  }

  public deleteDatabase = () => {
    Realm.deleteFile(this.configuration)
  }
}

export default new Database()
