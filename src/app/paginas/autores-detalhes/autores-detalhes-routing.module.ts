import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoresDetalhesPage } from './autores-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: AutoresDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoresDetalhesPageRoutingModule {}
