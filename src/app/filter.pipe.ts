import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var itemMatch= [];
    console.log("Inside pipe", value);
    for(var i=0; i < value.length; i++){
      let smallLetterValue = value[i].productName.toLowerCase();
      let smallLetterSearchTerm = args.toLowerCase();
      if(smallLetterValue.includes(smallLetterSearchTerm)){
        console.log("ay batee5s")
        itemMatch.push(value[i]);
      }
    }
    return itemMatch;
  }

}
