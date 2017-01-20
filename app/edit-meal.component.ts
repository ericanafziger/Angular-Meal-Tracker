import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meal',
  template: `
  <div class="editForm" *ngIf="showForm">
    <hr>
    <label>Meal Name</label>
    <input #name [(ngModel)]="childSelectedMeal.name">
    <label>Meal Details</label>
    <input #details [(ngModel)]="childSelectedMeal.details">
    <label>Meal Calories</label>
    <input type="number" #calories [(ngModel)]=childSelectedMeal.calories>
    <div class="buttons">
      <button (click)="cancelEdit()">Cancel</button>
      <button (click)="saveEditClicked()">Save</button>
      <delete-meal [childSelectedMeal]="childSelectedMeal" (deleteMealSender)="deleteMeal($event)"></delete-meal>
    </div>
  </div>
  <button *ngIf="showForm === false" (click)="showEditMealForm()">Edit</button>

  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() deleteMealSender = new EventEmitter();
  @Output() editMealSender = new EventEmitter();

  showForm : boolean = false;

  showEditMealForm() {
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
  }

  saveEditClicked() {
    this.editMealSender.emit();
    this.showForm = false;

  }

  deleteMeal($event) {
    this.deleteMealSender.emit($event);
  }

}
