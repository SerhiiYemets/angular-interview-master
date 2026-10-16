import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TrancatePipe implements PipeTransform {
  transform(value: string, limit: number = 10): string {
    return value.length > limit
      ? value.slice(0, limit) + '...'
      : value;
  }
}
