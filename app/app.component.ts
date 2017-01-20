import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Meal Tracker</h1>
    <div id="tracker">
      <h5>My Daily Calorie Goal:</h5>
      <h6>(Click on calories below to edit. Press <samp>shift</samp> to save.)</h6>
      <h3 id="calories" (keyup.shift)="updateCalories()" contenteditable="true">{{dailyCalories}}</h3>
      <div class="calorieTracker">
        <div class="calorieMeter" [style.width.%]="(currentCalories/dailyCalories)*100"></div>
        <h4>{{dailyCalories-currentCalories}} Remaining Today</h4>
      </div>
    </div>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <!--<button (click)="updateCalories()">Update Daily Calories</button>-->
    <meal-list (editMealSender)="editMeal($event)" (deleteMealSender)="deleteMeal($event)" [childMealList]="masterMealList"></meal-list>
  </div>
  `
})

export class AppComponent {

  masterMealList: Meal[] = [
    new Meal("Pizza", "2 slices of combination pizza from Costco", 400),
    new Meal("Salad", "Homemade cobb salad", 220),
    new Meal("Hamburger", "Hamburger with gluten free bun", 300),
    new Meal("Fettuccine Alfredo with Shrimp", "Ate entire bowl from Olive Garden", 830),
    new Meal("Yogurt", "Bowl of yogurt with blueberries and coconut flakes", 100),
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.unshift(newMealFromChild);
    this.currentCalories = this.countCalories();
  }

  deleteMeal($event) {
    this.masterMealList.splice(this.masterMealList.indexOf($event.meal), 1);
    this.currentCalories = this.countCalories();
  }

  editMeal($event) {
    this.currentCalories = this.countCalories();
  }

  countCalories() {
    var calories : number = 0;
    this.masterMealList.forEach(function(meal) {
      calories = meal.calories + calories;
    });
    return calories;
  }

  updateCalories() {
    var newValue : number = parseInt(document.getElementById("calories").innerHTML);
    console.log(newValue);
    this.dailyCalories = newValue;
  }

  dailyCalories: number = 2000;
  currentCalories: number = this.countCalories();

}
