import { Component, Inject, OnInit } from "@angular/core";

import { getTodos } from "./reducers";
import { toggleDone } from "./reducers/actions";
import { Todo } from "./Todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(@Inject("store") private store) {}

  ngOnInit() {
    this.todos = this.store.select(getTodos);
  }

  toggleDone(todo) {
    this.store.dispatch(toggleDone(todo));
  }
}
