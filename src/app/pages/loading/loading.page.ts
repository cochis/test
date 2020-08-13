import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading:any;
  constructor( private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.presentLoading("Esperame un rato");
    setTimeout(()=>{
      this.loading.dismiss();
    },2500);

  }
  
 async presentLoading(message:String) {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message
      // ,
      // duration: 2000
    });
    return this.loading.present();

    
  }
}
