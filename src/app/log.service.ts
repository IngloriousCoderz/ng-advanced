import { Injectable, Inject } from "@angular/core";
import { APP_NAME } from "./app.tokens";

@Injectable()
export class LogService {
  constructor(@Inject(APP_NAME) private appName) {}

  log(message: string) {
    console.log(`[${this.appName}] ${message}`);
  }
}
