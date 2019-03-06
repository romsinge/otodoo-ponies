import { CreatePoneyComponent } from './components/create-poney/create-poney.component';
import { CreateRaceComponent } from './components/create-race/create-race.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router'
import { RaceComponent } from './components/race/race.component';

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
    component: CreateRaceComponent
  },
  {
    path: 'create-poney',
    component: CreatePoneyComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]