
import { AsyncStorage } from 'react-native'

export class PersistContext {
    constructor(key, initialState) {
      this.key = key;
      const persistedState = this.getState();
      if (!persistedState) {
        this.persistState(initialState);
      }
    }
  
    persistState(state) {
      const stateJson = JSON.stringify(state);
      AsyncStorage.setItem(this.key, stateJson);
    }
  
    getState() {
      
        AsyncStorage.getItem(this.key).then(
            response =>{console.log(response)}
        )
        // const parsedResult = JSON.parse(stateJson);
        
       
    }
  }
  