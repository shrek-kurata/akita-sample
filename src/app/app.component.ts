import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CounterService, CounterQuery } from "src/store/counter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "akita";
  readonly favorite$: Observable<number>;
  constructor(
    private readonly counterService: CounterService,
    private counterQuery: CounterQuery
  ) {
    this.favorite$ = this.counterQuery.select("favorite");
  }

  increment() {
    this.counterService.increment();
  }
}
