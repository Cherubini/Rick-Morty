import { Component } from '@angular/core';
import { ConnectionService } from 'src/services/connection.service';
import { Result } from 'src/models/character';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  characters: Result[] =[];

  constructor(private connService:ConnectionService){

  }

  loadNextPage(){
    this.connService.getNext();

  }

}
