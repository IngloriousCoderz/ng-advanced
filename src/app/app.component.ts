import { Component, OnInit } from "@angular/core";

import { Todo } from "./Todo";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

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
