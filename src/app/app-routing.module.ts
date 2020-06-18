import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'editar-amigo',
    loadChildren: () => import('./editar-amigo/editar-amigo.module').then( m => m.EditarAmigoPageModule)
  },
  {
    path: 'novo-amigo',
    loadChildren: () => import('./novo-amigo/novo-amigo.module').then( m => m.NovoAmigoPageModule)
  },
  {
    path: 'nova-festa',
    loadChildren: () => import('./nova-festa/nova-festa.module').then( m => m.NovaFestaPageModule)
  },
  {
    path: 'selecionar-amigos',
    loadChildren: () => import('./selecionar-amigos/selecionar-amigos.module').then( m => m.SelecionarAmigosPageModule)
  },
  {
    path: 'selecionar-produtos',
    loadChildren: () => import('./selecionar-produtos/selecionar-produtos.module').then( m => m.SelecionarProdutosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
