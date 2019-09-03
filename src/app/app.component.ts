import {Component} from '@angular/core';
import {TodoDataService} from "./services/todo-data.service";
import {Todo} from "./classes/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: Todo = new Todo();
  editTodo: boolean = false;
  editableTodo: Todo = new Todo();
  currentIndex: number = 0;

  constructor(private todoDataService: TodoDataService) {
  }


  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  getIndex(i) {
    this.currentIndex = i;
    return this.currentIndex;
  }


  get todos() {
    return this.todoDataService.getAllTodos();
  }

  updateTodo(todo) {
    this.todoDataService.updateTodoById(todo, this.editableTodo);
    this.editableTodo = new Todo();
    this.editTodo = !this.editTodo;
  }


}
