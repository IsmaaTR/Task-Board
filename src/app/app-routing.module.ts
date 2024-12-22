import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'taskBoard',
    loadChildren: () => import( './tasks/tasks.module' ).then( m => m.TasksModule ),
  },
  {
    path: '',
    redirectTo: 'taskBoard',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
