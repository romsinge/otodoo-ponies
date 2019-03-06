import { DivideByPipe } from './pipes/divide-by.pipe';
import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RaceComponent } from './components/race/race.component';
import { RacingPipe } from './pipes/racing.pipe';
import { HomeComponent } from './components/home/home.component';
import { CreateRaceComponent } from './components/create-race/create-race.component'
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePoneyComponent } from './components/create-poney/create-poney.component';
import { ModalModule } from './modules/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    DivideByPipe,
    RaceComponent,
    RacingPipe,
    HomeComponent,
    CreateRaceComponent,
    CreatePoneyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
