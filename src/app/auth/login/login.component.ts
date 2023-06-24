import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/Services/common/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/Services/snackBar/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private snackBarService: SnackBarService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}
  form: any;
  isSubmitted:Boolean=false
  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  checkLoginData() {
    this.isSubmitted=true
    if (this.form.valid) {
      this.submitLoginData();
    }
  }
  submitLoginData() {
    
    localStorage.setItem("loginData",JSON.stringify(this.form.value))
    this.snackBarService.success('You have Logged in Successfullly');
this.router.navigateByUrl("home/dashboard")
    this.form.reset();
  }
}
