import { PoneyEffects } from './ngrx/effects/poney.effects';
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
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './modules/modal/modal.module';
import { ConfirmDialog } from './modules/crud-poney/guards/exit.guard';
import { StoreModule } from '@ngrx/store';
import { poneyReducer } from './ngrx/reducers/poney.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    DivideByPipe,
    RaceComponent,
    RacingPipe,
    ConfirmDialog
  ],
  entryComponents: [
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    StoreModule.forRoot({
      ponies: poneyReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 30
    }),
    EffectsModule.forRoot([
      PoneyEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
