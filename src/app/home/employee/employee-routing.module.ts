import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ModifyEmployeeComponent } from "./modify-employee/modify-employee.component";

const routes: Routes = [
            {
                path: "",
                redirectTo:'employeeList',
                pathMatch:"full"
            }, 
            {
                path: "employeeList",
                component:EmployeeListComponent,
                // title: 'Employee'
            }, 
            {
                path: "addEmployee",
                component:AddEmployeeComponent,
                // title: 'Add Employee'
            }, 
            {
                path: "modifyEmployee",
                component:ModifyEmployeeComponent,
                // title: 'Modify Employee'
            }, 
            
];   

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]       
})
export class EmployeeRoutingModule {}
