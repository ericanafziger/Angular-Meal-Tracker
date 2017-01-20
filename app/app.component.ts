import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker App</h1>
  </div>
  `
})

export class AppComponent {

}

export class Meal {
  public done: boolean = false;
  constructor(public name: string, public details: string, public calories: string) { }
}
