import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule, Store } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { TodosComponent } from "./todos/todos.component";

import rootReducer from "./reducers";
import { initialState } from "./reducers/initialState";

import { LogService } from "./log.service";
import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

import { APP_NAME, API_URL } from "./app.tokens";
import { ConfirmDirective } from "./directives/confirm";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          HttpClientModule,
          StoreModule.forRoot({ root: rootReducer }, { initialState })
        ],
        declarations: [
          AppComponent,
          FormComponent,
          TodosComponent,
          ConfirmDirective
        ],
        providers: [
          { provide: APP_NAME, useValue: "TODOZ" },
          { provide: API_URL, useValue: "http://localhost:3001/todos" },
          { provide: "log", useClass: LogService },
          { provide: "todo", useClass: TodoService },
          { provide: "store", useClass: Store }
        ]
      }).compileComponents();
    })
  );

  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    "should have <li> tags",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("li").textContent).toContain("Todo");
    })
  );
});
