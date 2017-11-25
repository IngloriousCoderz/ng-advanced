import { TestBed, inject } from "@angular/core/testing";

import { LogService } from "./log.service";

import { APP_NAME } from "./app.tokens";

describe("LogService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_NAME, useValue: "TODOZ" }, LogService]
    });
  });

  it(
    "should be created",
    inject([LogService], (service: LogService) => {
      expect(service).toBeTruthy();
    })
  );
});
