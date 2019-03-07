import { ExitGuard } from './guards/exit.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePoneyComponent } from './components/create-poney/create-poney.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [ ExitGuard ],
    component: CreatePoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPoneyRoutingModule { }
