import { Todo } from "./Todo";

export class TodoService {
  todos: Todo[] = [
    { id: 1, text: "Todo 1", done: true },
    { id: 2, text: "Todo 2", done: false },
    { id: 3, text: "Todo 3" }
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(text) {
    const id = this.todos.length ? this.todos[this.todos.length - 1].id : 0;
    this.todos.push({ id: id + 1, text: text });
  }

  toggleDone(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].done = !this.todos[index].done;
  }
}
