import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoJogoComponent } from './components/front/pages/novo-jogo/novo-jogo.component';

const routes: Routes = [
  { path: 'novo-jogo', component: NovoJogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
