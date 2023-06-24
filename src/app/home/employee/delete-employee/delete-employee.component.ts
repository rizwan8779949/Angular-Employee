import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SnackBarService } from 'src/app/shared/Services/snackBar/snack-bar.service';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {
  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private snackBar:SnackBarService) { }
  closeDialog() {
this.snackBar.success("Deleted successfully")
    this.dialogRef.close(true);
  }
}
