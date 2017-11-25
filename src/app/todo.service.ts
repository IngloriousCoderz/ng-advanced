import { Todo } from "./Todo";

export class TodoService {
  constructor(private todos: Todo[], private logService) {}

  getTodos() {
    this.logService.log("Fetching todos...");
    return this.todos;
  }

  addTodo(text) {
    const id = this.todos.length ? this.todos[this.todos.length - 1].id : 0;
    this.todos.push({ id: id + 1, text: text });
    this.logService.log(`Todo ${id + 1} added.`);
  }

  toggleDone(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].done = !this.todos[index].done;
    this.logService.log(`Todo ${id} toggled.`);
  }
}
