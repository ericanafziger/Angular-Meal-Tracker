import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="showForm">

    <label>Meal Name</label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Meal Details</label>
    <textarea [(ngModel)]="childSelectedMeal.details"></textarea>
    <label>Meal Calories</label>
    <input [(ngModel)]="childSelectedMeal.calories">

    <button (click)="cancelEdit()">Cancel</button>
    <button (click)="saveEditClicked()">Save</button>
  </div>
  <button *ngIf="showForm === false" (click)="showEditMealForm()">Edit</button>

  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;

  showForm : boolean = false;

  showEditMealForm() {
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
  }

  saveEditClicked() {
    this.showForm = false;
  }

}
