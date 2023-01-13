import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent, TarefasRoutes, TelaPrincipalComponent } from './base';
//import { TelaPrincipalRoutes } from './base';

const routes: Routes = [
  {
    path: '',
    redirectTo: "tela-principal",
    pathMatch: "full"
  },
  /* ...TarefasRoutes, */
  {
    path: 'tarefas',
    component: TarefasComponent
  },
  {
    path: 'tela-principal',
    component: TelaPrincipalComponent
  }
  /* ...TelaPrincipalRoutes */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
