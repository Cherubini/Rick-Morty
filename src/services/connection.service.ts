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

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Character>{
    return this.http.get<Data>(this.BASE_URL).pipe(
      switchMap((data)=>{
        const characterUrl = data.characters
        return this.http.get<Character>(characterUrl)
      })
    );
  }


}
