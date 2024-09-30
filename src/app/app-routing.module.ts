import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'livros',
    loadChildren: () => import('./paginas/livros/livros.module').then( m => m.LivrosPageModule)
  },
  {
    path: 'livros-detalhes',
    loadChildren: () => import('./paginas/livros-detalhes/livros-detalhes.module').then( m => m.LivrosDetalhesPageModule)
  },
  {
    path: 'autores',
    loadChildren: () => import('./paginas/autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'autores-detalhes',
    loadChildren: () => import('./paginas/autores-detalhes/autores-detalhes.module').then( m => m.AutoresDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
