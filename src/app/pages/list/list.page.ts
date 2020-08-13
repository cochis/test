import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    // this.dataService.getUsers().subscribe(
    //   (usuarios)=>{

    //         this.usuarios = usuarios;

    //    }); 
    this.usuarios = this.dataService.getUsers();
  }

  favorite(item) {
    console.log(item);
    this.lista.closeSlidingItems();
  }
  share(item) {
    console.log(item);
    this.lista.closeSlidingItems();
  }

  unread(item) {
    console.log(item);
    this.lista.closeSlidingItems();
  }
}
