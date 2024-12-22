import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-board-page',
  templateUrl: './task-board-page.component.html',
  styleUrl: './task-board-page.component.css'
})
export class TaskBoardPageComponent {

  //Atributos de la clase
  public tasks: Task[] = [ ];

}
