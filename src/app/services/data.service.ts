import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  TRELLO_ACCESS_KEY: string = '40cc90ac288f8234f9b41d99147c954f';
  TRELLO_ACCES_TOKEN: string = '4c8df4bc0813d6318c21ce07e1c886139d69efb81f5205da6249b90c2142e166';
  boardId = ""
constructor() { }

}
