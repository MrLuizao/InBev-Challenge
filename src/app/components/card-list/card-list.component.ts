import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroDetailsModel } from 'src/app/Models/hero-details.model';
import { BehaviourDataService } from 'src/app/services/behaviour-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  itemCards: HeroDetailsModel;
  textToFind: string;

  constructor(  private behaviorSrv: BehaviourDataService,
                public router: Router ) { }

  ngOnInit() {
    this.behaviorSrv.$getObjectSource.subscribe( (resp: HeroDetailsModel) => {
      this.itemCards = resp;
    }).unsubscribe();
  }

  findNameHero(event){
    this.textToFind = event.detail.value;
  }

  tapSingleCard( args: HeroDetailsModel ){
    this.behaviorSrv.bindTypeSingleArray(args)
    this.router.navigateByUrl('details')
  }

}
