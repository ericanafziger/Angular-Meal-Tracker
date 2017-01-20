import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker App</h1>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <h4>Meal List</h4>
    <div *ngFor="let currentMeal of masterMealList">
      <p>{{currentMeal.name}}</p>
      <p>{{currentMeal.details}}</p>
      <p>{{currentMeal.calories}}</p>
    </div>
  </div>
  `
})

export class AppComponent {

  masterMealList: Meal[] = [
    new Meal("Pizza", "2 slices of combination pizza from Costco", 400),
    new Meal("Salad", "Homemade cobb salad", 220),
    new Meal("Hamburger", "Hamburger with gluten free bun", 500)
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

}
