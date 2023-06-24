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
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.scss'],
})
export class ModifyEmployeeComponent implements OnInit {
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
  editEmployeeObject: any;
  editEmployeeIndex: Number = 0;
  ngOnInit() {
    this.commonService.getData.subscribe((res: any) => {
      if (res) {
        this.editEmployeeObject = res?.modifyEmployeeData;
        this.editEmployeeIndex = res?.index;
      } else this.goto('home/employee/employeeList');
    });
    this.form = this.formBuilder.group({
      name: [this.editEmployeeObject?.name, Validators.required],
      department: [this.editEmployeeObject?.department, Validators.required],
      salary: [Number(this.editEmployeeObject?.salary), Validators.required],
      task: [this.editEmployeeObject?.task, Validators.required],
      taskStatus: [this.editEmployeeObject?.taskStatus, Validators.required],
      manager: [this.editEmployeeObject?.manager, Validators.required],
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
    console.log(this.editEmployeeIndex, 'emp');
    empArrayList[Number(this.editEmployeeIndex)] = this.form.value;
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
