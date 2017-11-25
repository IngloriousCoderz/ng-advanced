import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [AppComponent, TodosComponent]
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
    `should have an empty text`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.text).toEqual("");
    })
  );

  it(
    `should have a list of todos`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
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
