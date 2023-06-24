import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
declare var $: any;
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private router: Router) {}
  getData = new BehaviorSubject(null);
  editDto = this.getData.asObservable();
  managerList=[
    {name:"Rajeev Kumar",value:"Rajeev Kumar"},
    {name:"Ravi Kumar",value:"Ravi Kumar"},
    {name:"Sohan Singh",value:"Sohan Singh"},
    {name:"Lalu Yadav",value:"Lalu Yadav"},
    {name:"Gurpreet Singh",value:"Gurpreet Singh"}
 ]
 departmentList=[
    {name:"IT",value:"IT"},
    {name:"HR",value:"HR"},
    {name:"BPO",value:"BPO"},
    {name:"DEO",value:"DEO"},
 ] 
 taskStatusList=[
  {name:"To-Do",value:"To-Do"},
  {name:"In-Progress",value:"In-Progress"},
  {name:"Done",value:"Done"},
  {name:"Reopen",value:"Reopen"},
  
]
  setData(dto: any) {
    this.getData.next(dto);
  }
onlyNumberAllowed(evt:any){
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('auth/login');
  }
}
 