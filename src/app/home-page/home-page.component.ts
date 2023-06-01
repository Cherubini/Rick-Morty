
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Info, Result } from 'src/models/character';
import { ConnectionService } from 'src/services/connection.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  info: Info | undefined;

  @Input() mybreakpoint?:number;
  public charactersSubject?: BehaviorSubject<Result[]>;
  charactersSubjectValue!:Result[];
  constructor(private connService: ConnectionService){
  this.loadCharacters();
}

loadCharacters(){
  this.connService.getCharacters().subscribe({
    next: char => {this.charactersSubject=new BehaviorSubject(char.results),
                  this.charactersSubjectValue=this.charactersSubject.value;
                  this.info =char.info
                  console.log(this.charactersSubject);
                },
    error: error => console.log(error),
  })
}

}
