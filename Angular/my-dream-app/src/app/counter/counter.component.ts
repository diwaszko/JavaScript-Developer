import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent {
  count = 2;
  plus() {
    this.count++;
  }
  minus() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
