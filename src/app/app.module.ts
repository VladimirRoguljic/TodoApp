import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TodoDataService} from './services/todo-data.service';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DragulaModule} from "ng2-dragula";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DragulaModule.forRoot()
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
