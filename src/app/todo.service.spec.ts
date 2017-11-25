import { TestBed, inject } from "@angular/core/testing";

import { LogService } from "./log.service";
import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

import { APP_NAME } from "./app.tokens";

describe("TodoService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
  });

  it(
    "should be created",
    inject(["todo"], (service: TodoService) => {
      expect(service).toBeTruthy();
    })
  );
});
