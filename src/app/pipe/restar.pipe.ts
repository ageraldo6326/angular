import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restar'
})
export class RestarPipe implements PipeTransform {

  transform(value: number): string {
    return `10 menos el valor que es ${value} es igual a: ${10 - value}` ;
  }

}
