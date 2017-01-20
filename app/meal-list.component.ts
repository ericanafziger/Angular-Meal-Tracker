import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals">All Meals</option>
    <option value="highCalories">Meals over 500 Calories</option>
    <option value="lowCalories" selected="selected">Meals under 500 Calories</option>
  </select>
  <h4>Meal List</h4>
  <div class="module" *ngFor="let currentMeal of childMealList | calories:filterByCalories">
    <p>{{currentMeal.name}}</p>
    <p>{{currentMeal.details}}</p>
    <p>{{currentMeal.calories}}</p>
    <edit-meal (deleteMealSender)="deleteMeal($event)" [childSelectedMeal]="currentMeal"></edit-meal>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() deleteMealSender = new EventEmitter();


  filterByCalories: string = "lowCalories";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  deleteMeal($event) {
    this.deleteMealSender.emit($event);
  }


}
