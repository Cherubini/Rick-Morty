import { Component } from '@angular/core';
import { ConnectionService } from 'src/services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rick-morty';


  constructor(private connService: ConnectionService){ }


}
