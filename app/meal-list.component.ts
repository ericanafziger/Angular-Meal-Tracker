import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <div class="module" *ngFor="let currentMeal of childMealList">
    <p>{{currentMeal.name}}</p>
    <p>{{currentMeal.details}}</p>
    <p>{{currentMeal.calories}}</p>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];


}
