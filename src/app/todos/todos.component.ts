import {
  Component,
  Input,
  Output,
  EventEmitter,
  Inject,
  ChangeDetectionStrategy
} from "@angular/core";

import { getTodos } from "../reducers";
import { toggleDoneRemote } from "../reducers/actions";
import { Todo } from "../Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  todos: Todo[];

  constructor(@Inject("store") private store) {}

  ngOnInit() {
    this.todos = this.store.select(getTodos);
  }

  onClick(todo) {
    this.store.dispatch(toggleDoneRemote(todo));
  }
}
