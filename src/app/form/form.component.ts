import { Component, Output, EventEmitter, Inject, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged";

import { getText } from "../reducers";
import { setText, addTodo } from "../reducers/actions";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  text: string = "";
  input$: Subject<any> = new Subject();
  submit$: Subject<any> = new Subject();

  constructor(@Inject("store") private store) {}

  ngOnInit() {
    this.text = this.store.select(getText);

    this.input$
      .debounceTime(400)
      .map(event => event.target.value)
      .distinctUntilChanged()
      .subscribe(text => {
        this.store.dispatch(setText(text));
      });

    this.submit$.subscribe(() => {
      this.store.dispatch(addTodo());
    });
  }
}
