import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { StoreModule, Store } from "@ngrx/store";

import rootReducer from "../reducers";
import { initialState } from "../reducers/initialState";

import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          StoreModule.forRoot({ root: rootReducer }, { initialState })
        ],
        declarations: [FormComponent],
        providers: [{ provide: "store", useClass: Store }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(
    `should have an empty text`,
    async(() => {
      const fixture = TestBed.createComponent(FormComponent);
      const form = fixture.debugElement.componentInstance;
      form.text.subscribe(text => expect(text).toBe(""));
    })
  );
});
