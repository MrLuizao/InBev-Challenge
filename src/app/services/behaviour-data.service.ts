import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroDetailsModel } from '../Models/hero-details.model';

@Injectable({
  providedIn: 'root'
})
export class BehaviourDataService {

  objectSource = new BehaviorSubject<{}>({});
  public $getObjectSource = this.objectSource.asObservable();

  arrayTapBind = new BehaviorSubject<{}>({});
  public $getarrayTapBind = this.arrayTapBind.asObservable();


  constructor() { }

  bindingObjectData( data: HeroDetailsModel ){    
    this.objectSource.next(data);
  }

  bindTypeSingleArray( param: HeroDetailsModel ){   
    this.arrayTapBind.next(param);
  }
}
