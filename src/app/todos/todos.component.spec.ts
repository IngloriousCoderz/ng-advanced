import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { StoreModule, Store } from "@ngrx/store";

import rootReducer from "../reducers";
import { initialState } from "../reducers/initialState";

import { TodosComponent } from "./todos.component";

describe("TodosComponent", () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [StoreModule.forRoot({ root: rootReducer }, { initialState })],
        declarations: [TodosComponent],
        providers: [{ provide: "store", useClass: Store }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(
    `should have a list of todos`,
    async(() => {
      const fixture = TestBed.createComponent(TodosComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      app.todos.subscribe(todos => expect(todos.length).toBe(3));
    })
  );
});
