import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeSerice } from "app/service/employee.service";
import { HttpModule } from "@angular/http";
import { BaseService } from "app/service/base.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BaseService, EmployeeSerice],
  bootstrap: [AppComponent]
})
export class AppModule { }
