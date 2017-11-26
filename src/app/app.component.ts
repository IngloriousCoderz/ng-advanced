import { Component, Inject, OnInit } from "@angular/core";

import { Todo } from "./Todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(@Inject("todo") private todoService) {}

  ngOnInit() {
    // this.todos = this.todoService.getTodos();
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }

  addTodo(text) {
    // this.todoService.addTodo(text).subscribe(() => this.ngOnInit());
    this.todoService.addTodo(text).subscribe(todo => this.todos.push(todo));
  }

  toggleDone(todo) {
    // this.todoService.toggleDone(todo).subscribe(() => this.ngOnInit());
    this.todoService.toggleDone(todo).subscribe(() => (todo.done = !todo.done));
  }
}
