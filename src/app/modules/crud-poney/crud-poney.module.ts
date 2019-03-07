import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPoneyRoutingModule } from './crud-poney-routing.module';
import { CreatePoneyComponent } from './components/create-poney/create-poney.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreatePoneyComponent
  ],
  imports: [
    CommonModule,
    CrudPoneyRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CrudPoneyModule { }
