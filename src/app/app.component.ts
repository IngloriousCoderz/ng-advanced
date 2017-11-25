import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  text = "";

  todos = [
    { id: 1, text: "Todo 1", done: true },
    { id: 2, text: "Todo 2", done: false },
    { id: 3, text: "Todo 3" }
  ];

  onSubmit() {
    const id = this.todos.length ? this.todos[this.todos.length - 1].id : 0;
    this.todos.push({ id: id + 1, text: this.text });
    this.text = "";
  }

  toggleDone(todo) {
    todo.done = !todo.done;
  }
}
