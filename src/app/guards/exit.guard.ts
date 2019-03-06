import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreatePoneyComponent } from '../components/create-poney/create-poney.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CreatePoneyComponent> {
  
  canDeactivate(component: CreatePoneyComponent): boolean {
    return component.poneyForm.pristine ? true : confirm('Êtes-vous sûr de vouloir quitter avant d\'avoir soumis le forulaire ?')
  }

}
