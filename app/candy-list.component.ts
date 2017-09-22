import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Candy } from './candy.model';

@Component({
  selector: 'candy-list',
  template: `
  <div class="col-md-3">
      <p (click)="clickName(currentCandy)"*ngFor="let currentCandy of childCandyList">{{currentCandy.name}}   <button class="btn btn-info btn-xs" (click)="editButtonHasBeenClicked(currentCandy)">Edit!</button></p>
  </div>
  `
})

export class CandyListComponent {
  @Input() childCandyList: Candy[];
  @Output() clickSender = new EventEmitter();

  clickName(clickedName: Candy){
    alert(clickedName.name);
  }

  editButtonHasBeenClicked(candyToEdit: Candy){
    this.clickSender.emit(candyToEdit);
  }
}
