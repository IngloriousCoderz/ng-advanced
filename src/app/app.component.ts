import { Component, Inject, OnInit } from "@angular/core";

import { fetchTodos } from "./reducers/actions";
import { Todo } from "./Todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(@Inject("store") private store) {}

  ngOnInit() {
    this.store.dispatch(fetchTodos());
  }
}
