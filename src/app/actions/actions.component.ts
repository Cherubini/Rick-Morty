import { Component } from '@angular/core';
import { ConnectionService } from 'src/services/connection.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  constructor(private connService:ConnectionService){

  }

  loadNextPage(){

  }

}
