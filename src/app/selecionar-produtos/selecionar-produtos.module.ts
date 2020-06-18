import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarProdutosPageRoutingModule } from './selecionar-produtos-routing.module';

import { SelecionarProdutosPage } from './selecionar-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarProdutosPageRoutingModule
  ],
  declarations: [SelecionarProdutosPage]
})
export class SelecionarProdutosPageModule {}
