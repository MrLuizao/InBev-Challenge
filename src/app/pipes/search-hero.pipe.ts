import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHero'
})
export class SearchHeroPipe implements PipeTransform {

  transform(items: any[], string: string): any[] {
    
    if(!items) return [];
    if(!string) return items;

    string = string.toLowerCase();

    return items.filter( item => {
      return item.name.toLowerCase().includes(string); 
    });
  }
}