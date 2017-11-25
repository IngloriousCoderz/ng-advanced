import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "../Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent {
  @Input() todos: Todo[];
  @Output() toggleDone: EventEmitter<Todo> = new EventEmitter();

  onClick(todo) {
    this.toggleDone.emit(todo);
  }
}
