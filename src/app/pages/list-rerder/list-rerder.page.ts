import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-rerder',
  templateUrl: './list-rerder.page.html',
  styleUrls: ['./list-rerder.page.scss'],
})
export class ListRerderPage implements OnInit {
personajes = ['Aquaman','Supermar','Batman','Flash','Mujer Maravilla'];
  constructor() { }

  ngOnInit() {
  }
  reorder(event) {

    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to,0,itemMover);
    
    event.detail.complete();
  }
  onClick(){
    console.log(this.personajes);
  }

}
