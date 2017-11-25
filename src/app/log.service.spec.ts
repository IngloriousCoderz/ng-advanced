import { TestBed, inject } from "@angular/core/testing";

import { LogService } from "./log.service";

describe("LogService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: "appName", useValue: "TODOZ" }, LogService]
    });
  });

  it(
    "should be created",
    inject([LogService], (service: LogService) => {
      expect(service).toBeTruthy();
    })
  );
});
