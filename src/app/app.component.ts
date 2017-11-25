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
    this.todos = this.todoService.getTodos();
  }

  addTodo(text) {
    this.todoService.addTodo(text);
  }

  toggleDone(todo) {
    this.todoService.toggleDone(todo.id);
  }
}
