import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecond',
})
export class MillisecondPipe implements PipeTransform {
  transform(value: string): number {
    let convert = +new Date(value);
    return convert;
  }
}
