import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './employees/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonalComponent } from './employees/personal/personal.component';
import { WorkComponent } from './employees/work/work.component';
import { AddressComponent } from './employees/address/address.component';
import { ResultComponent } from './employees/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,

    NavbarComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
