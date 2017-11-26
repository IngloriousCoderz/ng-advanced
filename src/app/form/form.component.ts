import {
  Component,
  Output,
  EventEmitter,
  Inject,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged";

import { getText } from "../reducers";
import { setText, addTodoRemote } from "../reducers/actions";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  text: Observable<string> = of("");
  input$: Subject<any> = new Subject();
  submit$: Subject<any> = new Subject();

  constructor(@Inject("store") private store) {}

  ngOnInit() {
    this.text = this.store.select(getText);

    this.input$
      .debounceTime(400)
      .map(event => event.target.value)
      .distinctUntilChanged()
      .subscribe(text => this.store.dispatch(setText(text)));

    this.submit$.subscribe(() => this.store.dispatch(addTodoRemote()));
  }
}
