import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'new-meal',
  template: `
  <div class="newMealButton" *ngIf="newMealForm === false">
    <button (click)="newMealFormShow()">Record Meal</button>
  </div>
  <div class="newMealForm" *ngIf="newMealForm">
    <h3>New Meal</h3>
    <form>
      <label>Food name</label>
      <input #name>
      <br>
      <label>Meal Details</label>
      <input #details>
      <br>
      <label>Calories</label>
      <input #calories type=number>
    </form>
    <div class="buttons">
      <button (click)="saveNewMeal(name.value, details.value, calories.value)">Save</button>
      <button (click)="cancelNewMeal()">Cancel</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  newMealForm : boolean = false;

  newMealFormShow() {
    this.newMealForm = true;
  }
  saveNewMeal(name:string, details:string, calories:string) {
    var newMealToAdd: Meal = new Meal(name, details, parseInt(calories));
    this.newMealSender.emit(newMealToAdd);
    this.newMealForm = false;
  }

  cancelNewMeal() {
    this.newMealForm = false;
  }

}
