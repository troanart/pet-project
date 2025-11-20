import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryClass'
})
export class CategoryClassPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'Marketing'.toLowerCase()) {
      return 
    };
    return null
    
  }

}
