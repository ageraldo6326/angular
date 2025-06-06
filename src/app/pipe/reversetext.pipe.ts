import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversetext'
})
export class ReversetextPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
