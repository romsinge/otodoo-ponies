import { Subject } from 'rxjs';
import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oto-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  message$: Subject<string>

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.message$ = this.modalService.getMessage()
  }

  close(): void {
    this.modalService.close()
  }
}
