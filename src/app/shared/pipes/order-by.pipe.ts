import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>( items: T[], key: string[], isAsc: boolean): any[] {

    items.sort((a: any, b: any) =>
      this.compare(a, b, key));


    return isAsc ? items : items.reverse();
  }

  private compare(a: any, b: any, key: string[], i: number = 0): number {
    if (a[key[i]] < b[key[i]]) {
      return -1;
    } else if (a[key[i]] > b[key[i]]) {
      return 1;
    } else if (i == key.length) {
      return 0;
    } else {
      return this.compare(a, b, key, i + 1);

    }
  }
}
