import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string): string {
    if( value.length>= 8){
      value = value.slice(0,8)+"..."
    }
    return value;
  }

}
