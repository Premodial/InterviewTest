import { Injectable } from '@angular/core';
import {DataService} from './data.service';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private dataService : DataService) { }

async getList(baordId : string){
  try{
    const listRef = await fetch('https://api.trello.com/1/boards/'+baordId+'/lists?key='+this.dataService.TRELLO_ACCESS_KEY+'&token='+this.dataService.TRELLO_ACCES_TOKEN, {
        method: 'GET'
      });
      const list  = (await listRef.text());
      return JSON.parse(list)
  }
  catch(err){
    console.log(err)
  }
}

async addList(baordId : string, listName:string){
  try{
    const listRef = await await fetch('https://api.trello.com/1/lists?key=' +this.dataService.TRELLO_ACCESS_KEY +'&token=' +this.dataService.TRELLO_ACCES_TOKEN +
    '&name=' +listName +'&idBoard=' +baordId ,{method: 'POST',});
    console.log(baordId)
  }
  catch(err){
    console.log(err)
  }
}

async deleteList(listId : string){
  try{
    const listRef = await fetch('https://api.trello.com/1/lists/'+listId+'/closed?key='+this.dataService.TRELLO_ACCESS_KEY+'&token='+this.dataService.TRELLO_ACCES_TOKEN, {
          method: 'PUT'
        })
  }
  catch(err){
    console.log(err)
  }
}

}
