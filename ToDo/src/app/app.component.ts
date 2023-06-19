import { Component } from '@angular/core';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: ToDo[] = [];
  newTodo: string;

  saveTodo() {
    if (this.newTodo) {
      let todo = new ToDo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('please enter todo');
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }
}
