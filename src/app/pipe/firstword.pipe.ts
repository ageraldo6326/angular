import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstword'
})
export class FirstwordPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ')[0]
  }


}
