import { Component } from "@angular/core";

@Component({  // Decorator
  selector: "app-counter",
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter(value : number): void {
    this.currentCount+=value;
  }

  public resetCounter(): void {
    this.currentCount = 0;
  }
}
