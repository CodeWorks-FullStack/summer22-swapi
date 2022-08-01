import { ProxyState } from "../AppState.js"
import { Person } from "../Models/Person.js"

class SwapiService {
  async getPreviousPeople() {
    if(!ProxyState.previous){
      throw new Error('This is the beginning')
    }

    // @ts-ignore
    let res = await axios.get(ProxyState.previous)
    // converts the raw data from swapi into our class person
    ProxyState.people = res.data.results.map(p => new Person(p))
    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

  }
  async getNextPeople() {
    
    if(!ProxyState.next){
      throw new Error('There is no one else')
    }

    // @ts-ignore
    let res = await axios.get(ProxyState.next)
    // converts the raw data from swapi into our class person
    ProxyState.people = res.data.results.map(p => new Person(p))
    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

  }
  
  
  // Get Request Example
  async getPeople() {
    // @ts-ignore
    let res = await axios.get('https://swapi.dev/api/people')
    console.log('get People response', res)
    // okay its customs time aka registration line
    ProxyState.people = res.data.results.map(p => new Person(p))

    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous


  }
}


export const swapiService = new SwapiService()