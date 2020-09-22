import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: TaskI[];
  total: number;
  
  constructor(private todoService: TodoService) {}
  
  ngOnInit(){
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
      
      let total = 0;
      for (let todo of res){
        total += todo.price*todo.quantity;
      }
      this.total = total;
    });
  }

  onRemove(IdTodo: string) {
    this.todoService.removeTodo(IdTodo);
  }
  
}
