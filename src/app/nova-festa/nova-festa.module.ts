import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaFestaPageRoutingModule } from './nova-festa-routing.module';

import { NovaFestaPage } from './nova-festa.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaFestaPageRoutingModule
  ],
  declarations: [NovaFestaPage]
})
export class NovaFestaPageModule {}
