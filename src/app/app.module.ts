import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { FormComponent } from "./form/form.component";

import { LogService } from "./log.service";
import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

import { THIRD_PARTY_PROVIDERS } from "./third-party";
import { APP_NAME, API_URL } from "./app.tokens";

@NgModule({
  declarations: [AppComponent, TodosComponent, FormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    { provide: APP_NAME, useValue: "TODOZ" },
    { provide: API_URL, useValue: "http://localhost:3001/todos" },
    { provide: "log", useClass: LogService },
    { provide: "todo", useClass: TodoService },
    THIRD_PARTY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
