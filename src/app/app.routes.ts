import { AdminGuard } from './guards/admin.guard';
import { Routes } from '@angular/router'
import { RaceComponent } from './components/race/race.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'compet',
    pathMatch: 'full'
  },
  {
    path: 'compet',
    loadChildren: 'src/app/modules/compet/compet.module#CompetModule'
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: 'crud-race',
    loadChildren: 'src/app/modules/crud-race/crud-race.module#CrudRaceModule'
  },
  {
    path: 'crud-poney',
    loadChildren: 'src/app/modules/crud-poney/crud-poney.module#CrudPoneyModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
]