import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../../services/data.service';
import {
  BoardService
} from 'src/app/services/board.service';
import {
  ListService
} from '../../services/list.service';
import {
  CardsService
} from '../../services/cards.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  constructor(
      private boardService: BoardService,
      private listService: ListService,
      private cardsService: CardsService,
      private dataService: DataService
  ) {
      this.getTrelloBoards();
  }
  boords = []
  list: [{
      "name": string,
      "id": string,
      "cards": any
  }]
  card = []
  boardId = ""

  ngOnInit(): void {}
  async getTrelloBoards() {
      const board = await this.boardService.getBoardTrelloBoads();
      board.forEach(element => {
          this.boords.push(element);
      });
  }

  async getList(boardId: string) {
      this.boardId = boardId;
      this.dataService.boardId = boardId;
      this.list = [{
          "name": "",
          "id": "",
          "cards": []
      }]
      this.list.pop();
      const trelloList = await this.listService.getList(boardId);
      trelloList.forEach(async element => {
          const card = await this.getCards(element.id);
          this.list.push({
              "name": element.name,
              "id": element.id,
              cards: card
          })
      });
      console.log(this.dataService.boardId)
  }

  async getCards(listId: string) {
      const trelloCard = await this.cardsService.getCards(listId);
      return trelloCard;
  }

  async addTrelloBoard(event: any) {
      await this.boardService.createTrelloBoard(event)
      this.getTrelloBoards();
  }

  async onDeleteBoard(boardId: string) {
      await this.boardService.deleteTrelloBoard(boardId);
      this.getTrelloBoards();
  }

  async onAddCard(cardName: string, listId: string) {
      await this.cardsService.addCard(cardName, listId);
      this.getList(this.boardId);
  }

  async onDeleteCard(cardId: string) {
      await this.cardsService.deleteCard(cardId);
      this.getList(this.boardId);
  }

  async addList(listName: string) {
      await this.listService.addList(this.boardId, listName);
      this.getList(this.boardId);
  }

  async onDeleteList(listId: string) {
      await this.listService.deleteList(listId);
      this.getList(this.boardId);
  }

}