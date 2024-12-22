import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskBoardPageComponent } from "./pages/task-board-page/task-board-page.component";

const routes: Routes = [
    {
        path: 'main',
        component: TaskBoardPageComponent,
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }