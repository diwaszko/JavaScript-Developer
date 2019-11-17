import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

// obiekt klasy będzie istnieć w pamięci do póki strona istnieje
// nazwa AppComponent jest powiązana w pliku app.module.ts
export class AppComponent {
  title = "co to ma byc";
  alert() {
    alert("test");
  }
}
