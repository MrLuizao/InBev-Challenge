import { Component, OnInit } from '@angular/core';
import { HeroDetailsModel } from 'src/app/Models/hero-details.model';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as SetActions from 'src/app/Redux/actions/object.actions';

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

  constructor(  private apiService: ApiDataService,
                private store: Store<AppState>  ) { 
                  this.reduxObj$ = this.store.select('object');
                }

  ngOnInit() {

    this.apiService.getCompleteJsonData().subscribe( (data: HeroDetailsModel)=>{
      this.heroModel = data;
      this.store.dispatch(new SetActions.SetObject(this.heroModel) )
      console.log('OBJECT IN REDUX',this.reduxObj$['actionsObserver']['_value'].payload);
    });


  }

  filterByBrand(param: string){

    this.filterItem = this.heroModel;
    const DATA_FILTERED = this.filterItem.filter( (item:HeroDetailsModel) => item.biography.publisher === param)
    console.log('DATA_FILTERED', DATA_FILTERED);
     
  }

}
