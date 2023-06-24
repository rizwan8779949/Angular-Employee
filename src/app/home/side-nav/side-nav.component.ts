import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from 'src/app/shared/Services/common/common.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  pageTitle = '';
  routingActive=""
  constructor(
    private router: Router,
    private title: Title,
    private ref: ChangeDetectorRef,
    private commonService:CommonService
  ) {
    router.events.subscribe((val) => {
      // see also
      const routeValue =
        window?.location?.href?.split('/')[
          window?.location?.href?.split('/')?.length - 1
        ];
      this.everyRouteChangeDetect(routeValue);
    });
  }

  changeOfRoutes() {
    this.pageTitle = this.title.getTitle();
  }
  everyRouteChangeDetect(pathName: string) {
    switch (pathName) {
      case 'dashboard':
        this.pageTitle = 'Dashboard';
        this.routingActive="Dashboard";
        break;
      case 'employeeList':
        this.pageTitle = 'Employee List';
        this.routingActive="Employee";
        break; 
      case 'addEmployee':
        this.pageTitle = 'Add Employee';
        this.routingActive="Employee";
        break;
        case 'modifyEmployee':
          this.pageTitle = 'Modify Employee';
          this.routingActive="Employee";
          break;
      default:
        this.pageTitle = 'Unknown';
        break;
    }
  }
  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  goto(url:string){
this.router.navigateByUrl(url)
  }
  logout(){
    this.commonService.logOut()
  }
}
