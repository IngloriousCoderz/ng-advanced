import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent {
  @Output() addTodo: EventEmitter<string> = new EventEmitter();

  text: string = "";

  onSubmit(text) {
    this.addTodo.emit(text);
    this.text = "";
  }
}
