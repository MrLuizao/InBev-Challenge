import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor( public httpClient: HttpClient ) { }

  getCompleteJsonData(){
    return this.httpClient.get('https://akabab.github.io/superhero-api/api/all.json')
  }

}
