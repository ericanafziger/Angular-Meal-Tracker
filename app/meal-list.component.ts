import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <div class="sortMenu">
    <label>Sort by:</label>
    <select (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected">All Meals</option>
      <option value="highCalories">Meals over 500 Calories</option>
      <option value="lowCalories">Meals under 500 Calories</option>
    </select>
  </div>
  <hr>
  <h3>Meal List</h3>
  <div class="moduleContainer">
    <div class="module" *ngFor="let currentMeal of childMealList | calories:filterByCalories">
      <h4>{{currentMeal.name}}</h4>
      <hr>
      <p>{{currentMeal.details}}</p>
      <h5>{{currentMeal.calories}} Calories</h5>
      <edit-meal (editMealSender)="editMeal($event)" (deleteMealSender)="deleteMeal($event)" [childSelectedMeal]="currentMeal"></edit-meal>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() deleteMealSender = new EventEmitter();
  @Output() editMealSender = new EventEmitter();


  filterByCalories: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  deleteMeal($event) {
    this.deleteMealSender.emit($event);
  }

  editMeal($event) {
    this.editMealSender.emit($event);
  }


}
