import { InitPonies } from './ngrx/actions/poney.actions';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from './ngrx/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OTODOO';

  ngOnInit(): void {
    this.store.dispatch(new InitPonies())
  }

  constructor(private store: Store<AppState>) {}
}
