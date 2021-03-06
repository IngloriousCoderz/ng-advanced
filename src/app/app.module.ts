import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule, Store } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { FormComponent } from "./form/form.component";

import { ConfirmDirective } from "./directives/confirm";

import rootReducer from "./reducers";
import { initialState } from "./reducers/initialState";
import { TodoEffects } from "./effects/todo";

import { LogService } from "./log.service";
import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

import { THIRD_PARTY_PROVIDERS } from "./third-party";
import { APP_NAME, API_URL } from "./app.tokens";

@NgModule({
  declarations: [AppComponent, TodosComponent, FormComponent, ConfirmDirective],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ root: rootReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [
    { provide: APP_NAME, useValue: "TODOZ" },
    { provide: API_URL, useValue: "http://localhost:3001/todos" },
    { provide: "log", useClass: LogService },
    { provide: "todo", useClass: TodoService },
    { provide: "store", useClass: Store },
    THIRD_PARTY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
