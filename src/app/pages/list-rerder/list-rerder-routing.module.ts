import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRerderPage } from './list-rerder.page';

const routes: Routes = [
  {
    path: '',
    component: ListRerderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRerderPageRoutingModule {}
