import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmplyeeComponent } from './emplyee/create-emplyee/create-emplyee.component';
import { UpdateEmplyeeComponent } from './emplyee/update-emplyee/update-emplyee.component';
import { EmplyeesListComponent } from './emplyee/emplyees-list/emplyees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeService } from './service/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmplyeeComponent,
    EmplyeesListComponent,
    UpdateEmplyeeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
