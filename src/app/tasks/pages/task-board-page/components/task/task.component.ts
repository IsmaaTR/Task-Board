import { Component, Input } from '@angular/core';
import { Task } from '../../../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  //Atributos de clase
  @Input()
  public task: Task | undefined;
}
