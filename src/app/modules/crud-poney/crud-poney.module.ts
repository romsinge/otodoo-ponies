import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPoneyRoutingModule } from './crud-poney-routing.module';
import { CreatePoneyComponent } from './components/create-poney/create-poney.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { CrudPoneyComponent } from './components/crud-poney/crud-poney.component';

@NgModule({
  declarations: [
    CreatePoneyComponent,
    ListComponent,
    CrudPoneyComponent
  ],
  imports: [
    CommonModule,
    CrudPoneyRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CrudPoneyModule { }
