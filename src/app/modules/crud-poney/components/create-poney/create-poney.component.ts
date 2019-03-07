import { AddPoney } from './../../../../ngrx/actions/poney.actions';
import { AppState } from './../../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'oto-create-poney',
  templateUrl: './create-poney.component.html',
  styleUrls: ['./create-poney.component.scss']
})
export class CreatePoneyComponent implements OnInit {

  poneyForm: FormGroup
  
  errorMessages = {
    required: "Ce champ est requis",
    isGif: "Format .gif exigé",
    isAvailable: "Ce nom n'est pas disponible"
  }

  constructor(
    private dataService: DataService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required ], [ this.isAvailable.bind(this) ]),
      img: new FormControl('', [ Validators.required, this.isGif ])
    })
  }

  handleSubmit() {
    let subscription = this.dataService.savePoney(this.poneyForm.value).subscribe(data => {
      this.store.dispatch(new AddPoney(data))
      this.poneyForm.reset()
      this.router.navigateByUrl('')
      subscription.unsubscribe()
    })
  }

  isGif(control: FormControl): ValidationErrors | null {
    let regExp = new RegExp('.+\.gif$')

    return regExp.test(control.value) ? null : {
      isGif: true
    }
  }

  isAvailable(control: FormControl): Observable<ValidationErrors | null> {

    return this.dataService.checkIfNameIsAvailable(control.value).pipe(map(isAvailable => {
      return isAvailable ? null : {
        isAvailable: true
      }
    }))

  }
}
