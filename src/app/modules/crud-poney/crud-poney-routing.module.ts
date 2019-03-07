import { ExitGuard } from './guards/exit.guard';
import { CreatePoneyComponent } from './components/create-poney/create-poney.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudPoneyComponent } from './components/crud-poney/crud-poney.component';

const routes: Routes = [
  {
    path: '',
    component: CrudPoneyComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'create',
        component: CreatePoneyComponent,
        canDeactivate: [ ExitGuard ]
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPoneyRoutingModule { }
