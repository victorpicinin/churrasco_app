import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarAmigosPage } from './selecionar-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarAmigosPageRoutingModule {}
