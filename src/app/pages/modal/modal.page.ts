import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() nombre;
  @Input() pais;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre: 'Oscar',
        pais: 'México'
      }
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log('retornos ', data);
  }
}
