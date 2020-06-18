import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaFestaPage } from './nova-festa.page';

const routes: Routes = [
  {
    path: '',
    component: NovaFestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaFestaPageRoutingModule {}
