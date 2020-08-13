import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Album } from '../components/interfaces/interfaces';

import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getUsers () {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getMenuOpts(){
    return this.http.get<Componente>('/assets/data/menu.json');

  }
  getAlbums(){
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');

  }
  
  getHeroes() {
    return this.http.get('/assets/data/superheroes.json')
        .pipe(
          delay(2000)
        );
  }
}