import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

import { API_URL } from "./app.tokens";
import { Todo } from "./Todo";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class TodoService {
  constructor(
    @Inject(API_URL) private apiUrl,
    @Inject("log") private logService,
    private http: HttpClient
  ) {}

  getTodos(): Observable<Todo[]> {
    this.logService.log("Fetching todos...");
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(text): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, { text }, httpOptions).do(todo => {
      this.logService.log(`Todo ${todo.id} added.`);
    });
  }

  toggleDone(todo): Observable<any> {
    return this.http
      .patch<Todo>(
        `${this.apiUrl}/${todo.id}`,
        { done: !todo.done },
        httpOptions
      )
      .do(() => {
        this.logService.log(`Todo ${todo.id} toggled.`);
      });
  }
}
