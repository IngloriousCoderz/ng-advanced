import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { TodosComponent } from "./todos/todos.component";

import { LogService } from "./log.service";
import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

import { APP_NAME } from "./app.tokens";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [AppComponent, FormComponent, TodosComponent],
        providers: [
          { provide: APP_NAME, useValue: "TODOZ" },
          { provide: "log", useClass: LogService },
          {
            provide: "todo",
            useFactory: logService => {
              const todos: Todo[] = [
                { id: 1, text: "Todo 1", done: true },
                { id: 2, text: "Todo 2", done: false },
                { id: 3, text: "Todo 3" }
              ];
              return new TodoService(todos, logService);
            },
            deps: ["log"]
          }
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
    `should have a list of todos`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      fixture.autoDetectChanges();
      expect(app.todos.length).toBe(3);
    })
  );

  it(
    "should render the todo text in each <li> tag",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("li").textContent).toContain("Todo");
    })
  );
});
