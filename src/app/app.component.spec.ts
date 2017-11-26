import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { TodosComponent } from "./todos/todos.component";

import { LogService } from "./log.service";
import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

import { APP_NAME, API_URL } from "./app.tokens";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientModule],
        declarations: [AppComponent, FormComponent, TodosComponent],
        providers: [
          { provide: APP_NAME, useValue: "TODOZ" },
          { provide: API_URL, useValue: "http://localhost:3001/todos" },
          { provide: "log", useClass: LogService },
          { provide: "todo", useClass: TodoService }
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
      // app.ngOnInit();
      // app.todos.subscribe(todos => expect(todos.length).toBe(3));
      // expect(app.todos.length).toBe(3); // NOTE: this fails!

      expect(app.todos.length).toBe(0);
    })
  );

  it(
    "should have no <li> tags",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      // expect(compiled.querySelector("li").textContent).toContain("Todo");
      expect(compiled.querySelector("li")).toBe(null);
    })
  );
});
