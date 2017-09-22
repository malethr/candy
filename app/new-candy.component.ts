import { Component } from '@angular/core';
import { Candy } from './candy.model';

@Component({
  selector: 'new-candy',
  template: `
  <h1>New Candy</h1>
  <div>
     <label>Enter Name:</label>
     <input #newName>
  </div>
  <button (click)="submitForm(newName.value)">Add</button>
  `
})

export class NewCandyComponent {
  submitForm(name: string) {
    var newCandyToAdd: Candy = new Candy(description);
  }
}
