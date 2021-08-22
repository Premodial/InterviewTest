import {
  Injectable
} from '@angular/core';
import {
  DataService
} from './data.service';
@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private dataService: DataService) {}


  async getCards(listId: string) {
      try {
          const cardRef = await fetch('https://api.trello.com/1/lists/' + listId + '/cards?key=' + this.dataService.TRELLO_ACCESS_KEY + '&token=' + this.dataService.TRELLO_ACCES_TOKEN, {
              method: 'GET'
          })
          const cards = (await cardRef.text());
          return JSON.parse(cards)
      } catch (err) {
          console.log(err)
      }
  }

  async addCard(cardName: string, listId: string) {
      try {
          const cardRef = await fetch('https://api.trello.com/1/cards?key=' + this.dataService.TRELLO_ACCESS_KEY + '&token=' + this.dataService.TRELLO_ACCES_TOKEN + '&name=' + cardName + '&idList=' + listId, {
              method: 'POST'
          })
      } catch (err) {
          console.log(err)
      }
  }

  async deleteCard(cardId: string) {
      try {
          const cardRef = await fetch('https://api.trello.com/1/cards/' + cardId + '?key=' + this.dataService.TRELLO_ACCESS_KEY + '&token=' + this.dataService.TRELLO_ACCES_TOKEN, {
              method: 'DELETE'
          })
      } catch (error) {
          console.log(error);
      }
  }

}