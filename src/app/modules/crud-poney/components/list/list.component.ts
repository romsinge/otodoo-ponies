import { DeletePoney } from './../../../../ngrx/actions/poney.actions';
import { Poney } from './../../../../interfaces/poney';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/ngrx/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'oto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  ponies$: Observable<Poney[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.ponies$ = this.store.pipe(select('ponies'))
  }

  handleDeleteClick(poneyId: string): void {
    this.store.dispatch(new DeletePoney(poneyId))
  }

}
