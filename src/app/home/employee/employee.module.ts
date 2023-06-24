import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';

@NgModule({
  declarations: [
    EmployeeListComponent, 
    DeleteEmployeeComponent,
    AddEmployeeComponent,
    ModifyEmployeeComponent,
  ],
  imports: [
    CommonModule,SharedModule,EmployeeRoutingModule
  ]
})     
export class EmployeeModule { }
