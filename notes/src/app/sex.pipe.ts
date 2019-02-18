import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // 需求：将传递过来的0或者1，转换为女或者男
    if(value == 0){
      return '女'
    }else if(value == 1){
      return '男';
    }
  }

}
