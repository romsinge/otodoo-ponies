import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { CreateRaceComponent } from './components/create-race/create-race.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRaceRoutingModule } from './crud-race-routing.module';

@NgModule({
  declarations: [
    CreateRaceComponent
  ],
  imports: [
    CommonModule,
    CrudRaceRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CrudRaceModule { }
