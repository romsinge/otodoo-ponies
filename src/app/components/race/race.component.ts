import { AppState } from './../../ngrx/app.state';
import { ModalService } from './../../modules/modal/services/modal.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Poney } from './../../interfaces/poney';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PoneyComponent } from '../poney/poney.component';
import { Race } from 'src/app/interfaces/race';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'oto-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>
  race$: Observable<Race>
  raceSubscription: Subscription

  ponies$: Observable<Poney[]>

  handleWin(poney: Poney): void {
    
    this.modalService.setMessage(`WINNER : ${poney.name} !`)
    
    this.poneyChildren.forEach(poneyChild => {
      poneyChild.stopRunning()
    })
  }

  ngOnInit() {

    this.ponies$ = this.store.pipe(select('ponies'))

    let raceId = this.route.snapshot.paramMap.get('id')

    this.race$ = this.dataService.getRaceById(raceId)

    this.raceSubscription = this.race$.subscribe(race => {
      if (!race) {
        this.router.navigateByUrl('')
      }
    })
  }

  ngOnDestroy(): void {
    this.raceSubscription.unsubscribe()
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private store: Store<AppState>
  ) {}

}
