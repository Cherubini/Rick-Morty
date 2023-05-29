
import { Component,OnInit } from '@angular/core';
import { Info, Result } from 'src/models/character';
import { ConnectionService } from 'src/services/connection.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  info: Info | undefined;
  characters: Result[] =[];
  mybreakpoint?: number;
  changeLog: any;
  constructor(private connService: ConnectionService){
    this.loadCharacters();
  }

  loadCharacters(){
    this.connService.getCharacters().subscribe({
      next: char => {this.characters=char.results,
                    this.info =char.info},
      error: error => console.log(error),
    })
  }

  ngOnInit(){
    this.mybreakpoint = (window.innerWidth <= 700) ? 1 : (window.innerWidth <= 1200) ? 3: 5;
  }




  handleSize(event: Event) {
    window.addEventListener('resize', (event: UIEvent) => {
    const w = event.target as Window;
    //console.log(w.innerWidth)  works!
    this.ngOnInit();
    });

  }

}
