import { DataService } from './../../services/data.service';
import { Race } from './../../interfaces/race';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'oto-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // races: Race[] = []
  races$: Observable<Race[]>

  ngOnInit() {
    // this.dataService.races.subscribe(races => {
    //   this.races = races
    // })
    this.races$ = this.dataService.races
  }

  constructor(private dataService: DataService) {}

}
