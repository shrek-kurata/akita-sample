import { Injectable } from "@angular/core";
import { CounterStore } from "./counter.store";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class CounterService {
  constructor(private counterStore: CounterStore, private http: HttpClient) {}

  increment() {
    this.counterStore.update(store => ({
      ...store,
      favorite: store.favorite + 1
    }));
  }

  get() {
    return this.http
      .get("")
      .pipe(tap(entities => this.counterStore.update(entities)));
  }
}
