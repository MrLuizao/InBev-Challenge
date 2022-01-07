import { Component, OnInit } from '@angular/core';
import { HeroDetailsModel } from 'src/app/Models/hero-details.model';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as SetActions from 'src/app/Redux/actions/object.actions';
import { BehaviourDataService } from 'src/app/services/behaviour-data.service';
import { Router } from '@angular/router';

interface AppState {
  object: HeroDetailsModel;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  reduxObj$: Observable<HeroDetailsModel>
  heroModel: HeroDetailsModel;
  filterItem: any = [];
  arrayFromRedux: HeroDetailsModel;

  constructor(  private apiService: ApiDataService,
                private behaviorSrv: BehaviourDataService,
                public router: Router,
                private store: Store<AppState>  ) { 
                  this.reduxObj$ = this.store.select('object');
                }

  ngOnInit() {

    this.apiService.getCompleteJsonData().subscribe( (data: HeroDetailsModel)=>{
      this.heroModel = data;
      this.store.dispatch(new SetActions.SetObject(this.heroModel) );
      this.arrayFromRedux = this.reduxObj$['actionsObserver']['_value'].payload;
      console.log('ARRAY STORAGED IN REDUX',this.arrayFromRedux);
    });

  }

  filterByBrand(param: string){
    
    this.filterItem = this.arrayFromRedux;
    const DATA_FILTERED = this.filterItem.filter( (item:HeroDetailsModel) => item.biography.publisher === param);
    this.behaviorSrv.bindingObjectData(DATA_FILTERED);
    this.router.navigateByUrl('details');

    this.router.navigate(['/publisher'], { queryParams: { title: param } });

  }

}
