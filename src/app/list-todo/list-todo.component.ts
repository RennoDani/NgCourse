import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent {
  
  task: string = '';
  status: boolean;
  // lists: any[] = [];
  lists: any[] = [
    {task_todo:'task 1', task_status:true},
    {task_todo:'task 2', task_status:true},
    {task_todo:'task 3', task_status:false},
    {task_todo:'task 4', task_status:true},
    {task_todo:'task 5', task_status:false},
    {task_todo:'task 6', task_status:false},
    {task_todo:'task 7', task_status:true},
  ];

  onAddTask(){
    this.lists.push({
      task_todo: this.task,
      task_status: this.status
    });
     console.log(this.lists);
  }

  alterStatus(num: number){
    this.lists[num].task_status= !this.lists[num].task_status;
  }
}
