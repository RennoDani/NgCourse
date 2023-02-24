import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent {

  task_aux: string = '';
  lists_aux: any[] = [];
  status_aux: boolean = false;

  lists: any[] = [
    { task_todo: 'task 1', task_status: true },
    { task_todo: 'task 2', task_status: true },
    { task_todo: 'task 3', task_status: false },
    { task_todo: 'task 4', task_status: true },
    { task_todo: 'task 5', task_status: false },
    { task_todo: 'task 6', task_status: false },
    { task_todo: 'task 7', task_status: true },
  ];


  ngOnInit() {
    this.updateListAux();
  }

  onAddTask() {
    this.lists.push({
      task_todo: this.task_aux,
      task_status: this.status_aux
    });
    this.updateListAux();
    this.task_aux = '';
  }

  alterStatus(num: number) {
    this.lists[num].task_status = !this.lists_aux[num].task_status_aux;
    this.updateListAux();
  }

  updateListAux() {
    this.lists_aux = [];
    for (let l of this.lists) {
      this.lists_aux.push({ task_todo_aux: l.task_todo, task_status_aux: l.task_status });
    }
  }

  onFilterTask(flag: boolean) {
    this.lists_aux = [];
    for (let l of this.lists) {
      if (l.task_status == flag) {
        this.lists_aux.push({ task_todo_aux: l.task_todo, task_status_aux: l.task_status });
      }
    }
  }
}
