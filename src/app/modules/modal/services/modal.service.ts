import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private messageSub$: Subject<string> = new Subject()

  getMessage(): Subject<string> {
    return this.messageSub$
  }

  setMessage(message: string): void {
    this.messageSub$.next(message)
  }

  close(): void {
    this.setMessage('')
  }

  constructor() { }
}
