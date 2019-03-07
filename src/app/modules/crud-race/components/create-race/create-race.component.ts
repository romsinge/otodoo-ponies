import { Poney } from '../../../../interfaces/poney';
import { DataService } from '../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from 'src/app/interfaces/race';
import { Router } from '@angular/router';

@Component({
  selector: 'oto-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  ponies$: Observable<Poney[]>
  race: Race = {
    "name": "",
    "poneyIds": []
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.ponies$ = this.dataService.ponies
  }

  handleSubmit(): void {
    let subscription = this.dataService.saveRace(this.race).subscribe(data => {
      this.router.navigateByUrl('')
      subscription.unsubscribe()
    })
  }
}
