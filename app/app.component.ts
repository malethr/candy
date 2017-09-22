import { Component } from '@angular/core';
import { Candy } from './candy.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="jumbotron">CANDY MONITOR APP</h1>
    <div class="row well">
      <candy-list [childCandyList]="masterCandyList" (clickSender)="editName($event)"></candy-list>
    </div>
    <hr>
    <edit-candy [childSelectedCandy]="selectedCandy" (doneButtonClickedSender)="finishedEditing()"></edit-candy>
    <new-candy></new-candy>
  </div>
  `
})

export class AppComponent {

  masterCandyList: Candy[] = [
    new Candy('lollipop','Pop',10,5),
    new Candy('Gummy Bear','Beary',20,10),
    new Candy('Pastillas','MangKanor',30,15)
  ];

  selectedCandy = null;

  editName(clickedName){
    this.selectedCandy=clickedName;
  }



  finishedEditing() {
   this.selectedCandy = null;
 }

}
