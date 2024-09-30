import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosDetalhesPageRoutingModule } from './livros-detalhes-routing.module';

import { LivrosDetalhesPage } from './livros-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrosDetalhesPageRoutingModule
  ],
  declarations: [LivrosDetalhesPage]
})
export class LivrosDetalhesPageModule {}
