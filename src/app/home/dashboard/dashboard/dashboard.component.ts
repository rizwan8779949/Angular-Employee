import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/Services/common/common.service';
import { employee } from 'src/app/shared/staticArrayClass/sataticArrayClass';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  employeeDataArrayList: employee[] = [];
  toDoStatusList: employee[] = [];
  inProgressStatusList: employee[] = [];
  doneStatusList: employee[] = [];
  reOpenStatusList: employee[] = [];
  topTenEmployeeList: employee[] = [];
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private commonService: CommonService
  ) {
    if (localStorage.getItem('empListData'))
      this.employeeDataArrayList = JSON.parse(
        localStorage.getItem('empListData') || '{}'
      );
    this.toDoStatusList = this.employeeDataArrayList.filter(
      (employee: employee) => employee?.taskStatus == 'To-Do'
    );
 
    this.inProgressStatusList = this.employeeDataArrayList.filter(
      (employee: employee) => employee?.taskStatus == 'In-Progress'
    );

    this.doneStatusList = this.employeeDataArrayList.filter(
      (employee: employee) => employee?.taskStatus == 'Done'
    );

    this.reOpenStatusList = this.employeeDataArrayList.filter(
      (employee: employee) => employee?.taskStatus == 'Reopen'
    );
    this.employeeDataArrayList.forEach((employee:employee,index:number)=>{
      if(index<=9){
        this.topTenEmployeeList.push(employee)
      }
    })
  }
}
