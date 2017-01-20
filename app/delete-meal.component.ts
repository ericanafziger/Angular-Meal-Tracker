import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'delete-meal',
  template: `
  <button (click)="deleteMealClicked(childSelectedMeal)">Delete</button>

  `
})

export class DeleteMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() deleteMealSender = new EventEmitter();


  deleteMealClicked(meal) {
    if (confirm("Are you sure you want to delete this meal?")) {
      this.deleteMealSender.emit({meal:meal});
    }
  }

}
