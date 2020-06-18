import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarProdutosPage } from './selecionar-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarProdutosPageRoutingModule {}
