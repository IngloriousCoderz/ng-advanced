import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { FormComponent } from "./form/form.component";

import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

@NgModule({
  declarations: [AppComponent, TodosComponent, FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    {
      provide: "todo",
      // useClass: TodoService,
      useFactory: () => {
        const todos: Todo[] = [
          { id: 1, text: "Todo 1", done: true },
          { id: 2, text: "Todo 2", done: false },
          { id: 3, text: "Todo 3" }
        ];
        return new TodoService(todos);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
