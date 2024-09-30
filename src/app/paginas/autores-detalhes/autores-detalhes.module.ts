import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresDetalhesPageRoutingModule } from './autores-detalhes-routing.module';

import { AutoresDetalhesPage } from './autores-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresDetalhesPageRoutingModule
  ],
  declarations: [AutoresDetalhesPage]
})
export class AutoresDetalhesPageModule {}
