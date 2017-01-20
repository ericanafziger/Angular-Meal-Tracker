import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="calorieTracker">
      <div class="calorieMeter" [style.width.%]="(currentCalories/2000)*100"></div>
      <h3>Current Calories: {{currentCalories}}</h3>
    </div>
    <h1>Meal Tracker App</h1>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <meal-list (deleteMealSender)="deleteMeal($event)" [childMealList]="masterMealList"></meal-list>
  </div>
  `
})

export class AppComponent {

  masterMealList: Meal[] = [
    new Meal("Pizza", "2 slices of combination pizza from Costco", 400),
    new Meal("Salad", "Homemade cobb salad", 220),
    new Meal("Hamburger", "Hamburger with gluten free bun", 500),
    new Meal("Fettuccine Alfredo with Shrimp", "Ate entire bowl from Olive Garden", 600)
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.unshift(newMealFromChild);
    this.currentCalories = this.countCalories();
  }

  deleteMeal($event) {
    this.masterMealList.splice(this.masterMealList.indexOf($event.meal), 1);
  }

  countCalories() {
    var calories : number = 0;
    this.masterMealList.forEach(function(meal) {
      calories = meal.calories + calories;
    });
    return calories;
  }
  currentCalories: number = this.countCalories();

}
