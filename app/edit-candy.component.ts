import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Candy } from './candy.model';

@Component({
  selector: 'edit-candy',
  template: `
  <div *ngIf="childSelectedCandy">
    <h3>{{childSelectedCandy.name}}</h3>
    <label>Enter Candy Name</label>
    <input [(ngModel)]="childSelectedCandy.name"><br>
    <label>Enter Brand</label>
    <input [(ngModel)]="childSelectedCandy.brand"><br>
    <label>Enter Price</label>
    <input [(ngModel)]="childSelectedCandy.price"><br>
    <label>Enter Sugar</label>
    <input [(ngModel)]="childSelectedCandy.grams"><br>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditCandyComponent {
  @Input() childSelectedCandy: Candy;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }




}
