import { Pipe, PipeTransform } from '@angular/core';
import { Cv } from '../models/models';
import { CV_LIST } from '../constants/constants';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {


  transform(value: Cv[], str: string): Cv[] {
   
    if(str === '' || str === null || str === undefined){
      return CV_LIST
    }
    return value.filter(value => value.profession.includes(str))
   
  }

}
