import { Poney } from './../../interfaces/poney';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'oto-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input() poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  intervalId: any

  constructor() {}

  ngOnInit() {
    this.run()
  }

  ngOnDestroy(): void {
    this.stopRunning()
  }

  run(): void {
    this.poney.distance = 0

    this.intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 3) + 5

      if (this.poney.distance >= 85) {
        this.poney.distance = 85
        this.win.emit(this.poney)
        this.stopRunning()
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

}
