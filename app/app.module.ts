import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { CandyListComponent }  from './candy-list.component';
import { EditCandyComponent }  from './edit-candy.component';
import { NewCandyComponent }  from './edit-candy.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, CandyListComponent, EditCandyComponent, NewCandyComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
