import { Observable, of } from 'rxjs';
import { Injectable, Component, Inject } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreatePoneyComponent } from '../components/create-poney/create-poney.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'confirm-dialog',
  templateUrl: '../modules/modal/templates/confirm-modal.template.html',
})
export class ConfirmDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CreatePoneyComponent> {
  
  canDeactivate(component: CreatePoneyComponent): Observable<boolean> {
    

    if (component.poneyForm.dirty) {
      const dialogRef = this.dialog.open(ConfirmDialog, {
        data: {
          message: 'Êtes-vous sûr de vouloir quitter avant d\'avoir soumis le formulaire ?'
        }
      })

      return dialogRef.afterClosed()
    } else {
      return of(true)
    }
    // return  true : confirm('Êtes-vous sûr de vouloir quitter avant d\'avoir soumis le forulaire ?')
  }

  constructor(private dialog: MatDialog) {}

}
