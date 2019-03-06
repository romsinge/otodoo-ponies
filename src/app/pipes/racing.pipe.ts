import { Poney } from './../interfaces/poney';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'racing'
})
export class RacingPipe implements PipeTransform {

  transform(ponies: Poney[] = [], poneyIds: string[] = []): Poney[] {
    try {
      return ponies.filter(poney => poneyIds.includes(poney.id))
    } catch {
      return []
    }
  }

}
