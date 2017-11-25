import { Injectable, Inject } from "@angular/core";

@Injectable()
export class LogService {
  constructor(@Inject("appName") private appName) {}

  log(message: string) {
    console.log(`[${this.appName}] ${message}`);
  }
}
