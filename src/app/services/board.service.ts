import {
  Injectable
} from '@angular/core'
import {
  DataService
} from './data.service';
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private dataService: DataService) {}
  async getBoardTrelloBoads() {
      try {
          const boardListRefrence = await fetch('https://api.trello.com/1/members/me/boards?key=' + this.dataService.TRELLO_ACCESS_KEY + '&token=' + this.dataService.TRELLO_ACCES_TOKEN, {
              method: 'GET',
              headers: {
                  'Accept': 'application/json'
              }
          })
          const boards = (await boardListRefrence.text());
          return JSON.parse(boards)
      } catch (err) {
          console.log(err)
      }
  }

  public async deleteTrelloBoard(boardId: string) {
      try {
          const boardCreatedRefrence = await fetch('https://api.trello.com/1/boards/' + boardId + '?key=' + this.dataService.TRELLO_ACCESS_KEY + '&token=' + this.dataService.TRELLO_ACCES_TOKEN, {
              method: 'DELETE'
          })
      } catch (error) {
          console.log(error)
      }
  }

  public async createTrelloBoard(boardName: string) {
      try {
          const boardCreatedRefrence = await fetch('https://api.trello.com/1/boards/?key=' + this.dataService.TRELLO_ACCESS_KEY + '&token=' +
              this.dataService.TRELLO_ACCES_TOKEN + '&name=' + boardName, {
                  method: 'POST',
              }
          );
      } catch (error) {
          console.log(error)
      }
  }

}