import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Album } from '../../components/interfaces/interfaces';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albums : Album[] = [];
  textoBuscar = '';
  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(
        albums =>{
          console.log(albums);
          this.albums = albums;
        }
    );
  }
  buscar(event){
    this.textoBuscar = event.detail.value;
   console.log( this.textoBuscar);

  }

}
