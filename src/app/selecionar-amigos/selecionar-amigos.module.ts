import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarAmigosPageRoutingModule } from './selecionar-amigos-routing.module';

import { SelecionarAmigosPage } from './selecionar-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarAmigosPageRoutingModule
  ],
  declarations: [SelecionarAmigosPage]
})
export class SelecionarAmigosPageModule {}
