import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divideBy'
})
export class DivideByPipe implements PipeTransform {

  transform(numerator: number, denominator: number): number {
    return numerator / denominator
  }

}
