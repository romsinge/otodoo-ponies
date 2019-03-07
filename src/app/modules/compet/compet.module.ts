import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetRoutingModule } from './compet-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CompetRoutingModule,
    MaterialModule
  ]
})
export class CompetModule { }
