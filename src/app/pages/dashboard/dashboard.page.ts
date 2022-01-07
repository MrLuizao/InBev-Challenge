import { Component, OnInit } from '@angular/core';
import { HeroDetailsModel } from 'src/app/Models/hero-details.model';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  heroModel: HeroDetailsModel = new HeroDetailsModel();
  filterItem: any = [];

  constructor( private apiService: ApiDataService ) { }

  ngOnInit() {
    this.apiService.getCompleteJsonData().subscribe( (data: HeroDetailsModel)=>{
      this.heroModel = data;
    });

  }

  filterByBrand(param: string){

    this.filterItem = this.heroModel;
    const DATA_FILTERED = this.filterItem.filter( (item:HeroDetailsModel) => item.biography.publisher === param)
    console.log('DATA_FILTERED', DATA_FILTERED);
     
  }

}
