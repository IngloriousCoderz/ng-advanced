import { InjectionToken } from "@angular/core";

const APP_NAME = new InjectionToken("appName");

export const THIRD_PARTY_PROVIDERS = [
  {
    provide: APP_NAME,
    useValue: "THIRDPARTIEZ"
  }
];
