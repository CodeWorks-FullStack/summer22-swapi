import { ProxyState } from "../AppState.js";
import { swapiService } from "../Services/SwapiService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPeople() {
  let template = ''

  ProxyState.people.forEach(p => template += p.Template)

  // @ts-ignore
  document.getElementById('people').innerHTML = `
    <div>
      ${template}
    </div>
  `

}


export class PeopleController {
  constructor() {
    console.log('testing');

    ProxyState.on('people', _drawPeople)

  }

  // THE CARDNIAL RULE
  // EVERY TIME 
  // ONLY WHILE IN CONTROLLERS
  async goGetPeopleFromSwapi() {
    try {
      await swapiService.getPeople()
      console.log('I dont run until the line above is finished')
    } catch (error) {
      console.error('[Getting People]', error)
      Pop.error(error)
    }
  }

  async next(){
    try {
      await swapiService.getNextPeople()
    } catch (error) {
      console.error('[next error]', error)
      Pop.error(error)
    }
  }

  async previous(){
    try {
      await swapiService.getPreviousPeople()
    } catch (error) {
      console.error('[previous error]', error)
      Pop.error(error)
    }
  }

}