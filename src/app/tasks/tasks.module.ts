import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardPageComponent } from './pages/task-board-page/task-board-page.component';
import { EditTaskPageComponent } from './pages/edit-task-page/edit-task-page.component';
import { TaskComponent } from './pages/task-board-page/components/task/task.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [
    TaskBoardPageComponent,
    EditTaskPageComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
