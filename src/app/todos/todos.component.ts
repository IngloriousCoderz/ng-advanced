import { Component, Input } from "@angular/core";

import { Todo } from "../Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent {
  @Input() todos: Todo[];

  toggleDone(todo) {
    todo.done = !todo.done;
  }
}
