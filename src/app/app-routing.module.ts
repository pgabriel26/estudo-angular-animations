import { NgModule } from '@angular/core';

import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaTarefas',
    pathMatch: 'full',
  },
  {
    path: 'listaTarefas',
    component: ListaTarefasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
 })
export class AppRoutingModule { }

