import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  forkJoin, switchMap } from 'rxjs';
import { Character } from 'src/models/character';
import { Data } from 'src/models/data';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  BASE_URL = "https://rickandmortyapi.com/api";
  //https://rickandmortyapi.com/api/character?page=4
  NEXT:string | null ='';
  PREV:string | null ='';
  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Character>{
    return this.http.get<Data>(this.BASE_URL).pipe(
      switchMap((data)=>{
        const characterUrl = data.characters
        return this.http.get<Character>(characterUrl).pipe(
          switchMap((data)=>{
            this.NEXT=data.info.next;
            this.PREV=data.info.prev;
            return this.http.get<Character>(characterUrl)
          }
        )
      )}
    ));
  }

  getNext(): Observable<Character>{
    if(this.NEXT != null){
      return this.http.get<Data>(this.NEXT).pipe(
        switchMap((data)=>{
          const characterUrl = data.characters
          return this.http.get<Character>(characterUrl)
        })
      );
    }
    return this.getCharacters()
  }


}
