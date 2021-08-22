import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  TRELLO_ACCESS_KEY: string = '';
  TRELLO_ACCES_TOKEN: string = '';
  boardId = ""
  constructor() {}
}
