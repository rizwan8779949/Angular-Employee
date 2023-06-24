import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {

  }
  success(message: string) {
    this.snackBar.open(message, 'Success', {
      duration:3000,
      panelClass: ['success-SnackBar'],
      verticalPosition:"bottom",
      horizontalPosition:"right"
    });
  }
  error(message: string) {
    this.snackBar.open(message, 'Error', {
      duration:3000,
      panelClass: ['error-snackBar'],
      verticalPosition:"bottom",
      horizontalPosition:"right"
    });
  } 
  info(message: string) {
    this.snackBar.open(message, 'Info', {
      duration:3000,
      panelClass: ['info-snackBar'],
      verticalPosition:"top",
      horizontalPosition:"right"
    });
  }
}
