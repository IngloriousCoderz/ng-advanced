import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/withLatestFrom";

import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";

import { API_URL } from "../app.tokens";
import { getText } from "../reducers";
import { Todo } from "../Todo";

import {
  FETCH_TODOS_EFFECT,
  ADD_TODO_EFFECT,
  TOGGLE_DONE_EFFECT
} from "../reducers/actionTypes";
import { setTodos, addTodo, toggleDone } from "../reducers/actions";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

interface FSA extends Action {
  payload?: any;
}

@Injectable()
export class TodoEffects {
  @Effect()
  getTodos$: Observable<Action> = this.actions$
    .ofType(FETCH_TODOS_EFFECT)
    .mergeMap(action => this.http.get<Todo[]>(this.apiUrl).map(setTodos));

  @Effect()
  addTodo$: Observable<Action> = this.actions$
    .ofType<FSA>(ADD_TODO_EFFECT)
    .withLatestFrom(this.store$)
    .mergeMap(([action, state]) =>
      this.http
        .post<Todo>(this.apiUrl, { text: getText(state) }, httpOptions)
        .map(({ text }) => addTodo(text))
    );

  @Effect()
  toggleDone$: Observable<Action> = this.actions$
    .ofType<FSA>(TOGGLE_DONE_EFFECT)
    .mergeMap(({ payload: todo }) => {
      return this.http
        .patch<Todo>(
          `${this.apiUrl}/${todo.id}`,
          { done: !todo.done },
          httpOptions
        )
        .map(() => toggleDone(todo.id));
    });

  constructor(
    @Inject(API_URL) private apiUrl,
    private http: HttpClient,
    private actions$: Actions,
    @Inject("store") private store$
  ) {}
}
