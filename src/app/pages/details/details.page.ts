import { Component, OnInit } from '@angular/core';
import { HeroDetailsModel } from 'src/app/Models/hero-details.model';
import { BehaviourDataService } from 'src/app/services/behaviour-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  loading: boolean;
  heroDetail: HeroDetailsModel;
  imgBackGround: string;

  constructor( private behaviorSrv: BehaviourDataService ) { }

  ngOnInit() {
    this.loading = true;
    console.log(this.loading);
    
    setTimeout( ()=>{
      this.behaviorSrv.$getarrayTapBind.subscribe( (resp: HeroDetailsModel)=>{
        this.heroDetail = resp;
        this.imgBackGround = this.heroDetail.images.lg;
        this.loading = false;
      }).unsubscribe();
    }, 500)
  }

}
