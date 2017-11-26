import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { Todo } from "./Todo";

export class TodoService {
  constructor(private todos: Todo[], private logService) {}

  getTodos(): Observable<Todo[]> {
    this.logService.log("Fetching todos...");
    return of(this.todos);
  }

  addTodo(text): Observable<Todo> {
    const id = this.todos.length ? this.todos[this.todos.length - 1].id : 0;
    const todo = { id: id + 1, text };
    this.todos.push(todo);
    this.logService.log(`Todo ${todo.id} added.`);
    return of(todo);
  }

  toggleDone(id): Observable<any> {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].done = !this.todos[index].done;
    this.logService.log(`Todo ${id} toggled.`);
    return new Observable();
  }
}
