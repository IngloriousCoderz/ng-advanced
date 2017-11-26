import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { LogService } from "./log.service";
import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

import { APP_NAME, API_URL } from "./app.tokens";

describe("TodoService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: APP_NAME, useValue: "TODOZ" },
        { provide: API_URL, useValue: "http://localhost:3001/todos" },
        { provide: "log", useClass: LogService },
        { provide: "todo", useClass: TodoService }
      ]
    });
  });

  it(
    "should be created",
    inject(["todo"], (service: TodoService) => {
      expect(service).toBeTruthy();
    })
  );
});
