import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @Output() addTodo: EventEmitter<string> = new EventEmitter();

  input$: Subject<any> = new Subject();
  submit$: Subject<any> = new Subject();
  text: string = "";

  ngOnInit() {
    this.input$
      .debounceTime(400)
      .map(event => event.target.value)
      .distinctUntilChanged()
      .subscribe(text => {
        console.log(text);
        this.text = text;
      });

    this.submit$.subscribe(() => {
      this.addTodo.emit(this.text);
      this.text = "";
    });
  }
}
