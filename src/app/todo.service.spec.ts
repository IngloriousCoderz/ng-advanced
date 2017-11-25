import { TestBed, inject } from "@angular/core/testing";

import { TodoService } from "./todo.service";
import { Todo } from "./Todo";

describe("TodoService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: "todo",
          // useClass: TodoService,
          useFactory: () => {
            const todos: Todo[] = [
              { id: 1, text: "Todo 1", done: true },
              { id: 2, text: "Todo 2", done: false },
              { id: 3, text: "Todo 3" }
            ];
            return new TodoService(todos);
          }
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
