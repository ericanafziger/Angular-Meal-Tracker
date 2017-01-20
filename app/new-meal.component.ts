import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'new-meal',
  template: `
  <div *ngIf="newMealForm === false">
    <button (click)="newMealFormShow()">Record Meal</button>
  </div>
  <div *ngIf="newMealForm">
    <h3>New Meal</h3>
    <form>
      <label>Food name</label>
      <input #name>
      <br>
      <label>Description</label>
      <input #description>
      <br>
      <label>Calories</label>
      <input #calories>
    </form>
    <button (click)="saveNewMeal(name.value, description.value, calories.value); name.value=''; description.value=''; calories.value=''">Save</button>
    <button (click)="cancelNewMeal()">Cancel</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  newMealForm : boolean = false;

  newMealFormShow() {
    this.newMealForm = true;
  }
  saveNewMeal(name: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMealToAdd);
    this.newMealForm = false;
  }

  cancelNewMeal() {
    this.newMealForm = false;
  }

}
