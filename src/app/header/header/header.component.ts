import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service';
import {BoardComponent} from '../../board/board/board.component'
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private listService: ListService,
    private board : BoardComponent,
    private dataService : BoardComponent
  ) { }

  ngOnInit(): void {
  }

}
