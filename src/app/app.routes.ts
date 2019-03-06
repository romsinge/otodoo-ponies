import { AdminGuard } from './guards/admin.guard';
import { CreatePoneyComponent } from './components/create-poney/create-poney.component';
import { CreateRaceComponent } from './components/create-race/create-race.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router'
import { RaceComponent } from './components/race/race.component';
import { ExitGuard } from './guards/exit.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: 'create-race',
    component: CreateRaceComponent,
    canActivate: [ AdminGuard ]
  },
  {
    path: 'create-poney',
    component: CreatePoneyComponent,
    canDeactivate: [ ExitGuard ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]