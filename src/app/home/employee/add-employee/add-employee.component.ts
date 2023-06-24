import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/Services/common/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/Services/snackBar/snack-bar.service';
import {
  department,
  manager,
  taskStatus,
} from 'src/app/shared/staticArrayClass/sataticArrayClass';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private snackBarService: SnackBarService,
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {}
  form: any;
  isSubmitted: Boolean = false;
  allDepartMentList: department[] = [];
  allManagerList: manager[] = [];
  allTaskStatusList: taskStatus[] = [];

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
      task: ['', Validators.required],
      taskStatus: ['', Validators.required],
      manager: ['', Validators.required],
    }); 
    this.allDepartMentList = this.commonService.departmentList;
    this.allManagerList = this.commonService.managerList;
    this.allTaskStatusList = this.commonService.taskStatusList;
  }
  checkEmployeFormData() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.submitEmployeFormData();
    }
  }
  submitEmployeFormData() {
    let empArrayList = [];
    if (localStorage.getItem('empListData'))
      empArrayList = JSON.parse(localStorage.getItem('empListData') || '{}');
    empArrayList.unshift(this.form.value);
    localStorage.setItem('empListData', JSON.stringify(empArrayList));
    this.snackBarService.success('Add new employee successfully');
    this.router.navigateByUrl('home/employee/employeeList');
    this.form.reset();
  }
  goto(url: string) {
    this.router.navigateByUrl(url);
  }
  onlyNumberAllowed(evt: any) {
    return this.commonService.onlyNumberAllowed(evt);
  }
}
