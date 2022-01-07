import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor( public httpClient: HttpClient ) { }

  getCompleteJsonData(){
    return this.httpClient.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  }

}
