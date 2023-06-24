import {
  AfterViewInit,
  Component,
  StaticClassProvider,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { employee } from 'src/app/shared/staticArrayClass/sataticArrayClass';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { CommonService } from 'src/app/shared/Services/common/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private commonService: CommonService
  ) {
    if (localStorage.getItem('empListData'))
      this.employeeDataSource.data = JSON.parse(
        localStorage.getItem('empListData') || '{}'
      );
  }
  displayedColumnsName = [
    'name',
    'department',
    'salary',
    'task',
    'taskStatus',
    'manager',
    'actions',
  ]; 
  sort: any;
  paginator: any;
  employeeDataSource = new MatTableDataSource<employee>([]);

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.employeeDataSource.paginator = this.paginator;
    this.employeeDataSource.sort = this.sort;
  }
  applyFilter(event: any) {
    this.employeeDataSource.filter = event.target.value.trim().toLowerCase();
    if (this.employeeDataSource.paginator) {
      this.employeeDataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {}
  goto(url: string) {
    this.router.navigateByUrl(url);
  }
  editEmployeee(employeeData: any, index: Number) {
    this.commonService.setData({
      modifyEmployeeData: employeeData,
      index: index,
    });
    this.goto('home/employee/modifyEmployee');
  }
  openDeleteDialog(empIndex: Number): void {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeDataSource.data.splice(Number(empIndex), 1);
        localStorage.setItem(
          'empListData',
          JSON.stringify(this.employeeDataSource.data)
        );
        this.employeeDataSource.data = JSON.parse(
          localStorage.getItem('empListData') || '{}'
        );
      }
    });
  }
}
