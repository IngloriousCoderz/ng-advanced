import { Directive, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[appConfirm]"
})
export class ConfirmDirective {
  @Input() appConfirm: Function = () => {};
  @Input() message: string = "Are you sure?";

  @HostListener("click", ["$event"])
  confirmFirst(event: Event) {
    window.confirm(this.message) && this.appConfirm();
  }
}
