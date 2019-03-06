import * as M from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    M.MatToolbarModule,
    M.MatCardModule,
    M.MatListModule,
    M.MatButtonModule,
    M.MatInputModule,
    M.MatSelectModule,
    M.MatDialogModule
  ]
})
export class MaterialModule { }
