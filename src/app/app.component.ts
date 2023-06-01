import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Rick-morty';
  mybreakpoint?: number;
  changeLog: any;

  constructor(private connService: ConnectionService){ }

  ngOnInit(){
    this.mybreakpoint = (window.innerWidth <= 650) ? 1 : (window.innerWidth <= 900) ? 2: (window.innerWidth <= 1400) ? 3 : 5;
  }




  handleSize(event: Event) {
    window.addEventListener('resize', (event: UIEvent) => {
    const w = event.target as Window;
    //console.log(w.innerWidth)  works!
    this.ngOnInit();
    });

  }


}
