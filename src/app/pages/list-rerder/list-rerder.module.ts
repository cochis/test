import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRerderPageRoutingModule } from './list-rerder-routing.module';

import { ListRerderPage } from './list-rerder.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRerderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListRerderPage]
})
export class ListRerderPageModule {}
