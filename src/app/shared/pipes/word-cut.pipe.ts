import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCut',
})
export class WordCutPipe implements PipeTransform {
  transform(text: any, length: number = 2, showAll: boolean = false): any {
    if (showAll) {
      return text;
    }

    if (text.split(' ').length > length) {
      return text.split(' ').splice(0, length).join(' ');
    }

    return text;
  }
}
