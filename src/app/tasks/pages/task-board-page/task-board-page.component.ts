import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-board-page',
  templateUrl: './task-board-page.component.html',
  styleUrl: './task-board-page.component.css'
})
export class TaskBoardPageComponent {

  //Atributos de la clase
  public tasks: Task[] = [ 
    {
      id: 1,
      name: 'Tarea de prueba 1',
      description: 'Por hacer',
      icon: 'Estudio',
      status: 'To-do'
    },
    {
      id: 2,
      name: 'Tarea de prueba 2',
      description: 'En progreso',
      icon: 'Estudio',
      status: 'In progress'
    },
    {
      id: 3,
      name: 'Tarea de prueba 3',
      description: 'Hecha',
      icon: 'Estudio',
      status: 'Completed'
    },
    {
      id: 4,
      name: 'Tarea de prueba 4',
      description: 'No la haré',
      icon: 'Estudio',
      status: 'Won\'t do'
    },
  ];
}
