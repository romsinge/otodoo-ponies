import { AdminGuard } from './../../guards/admin.guard';
import { CreateRaceComponent } from './components/create-race/create-race.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CreateRaceComponent,
    canActivate: [ AdminGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRaceRoutingModule { }
