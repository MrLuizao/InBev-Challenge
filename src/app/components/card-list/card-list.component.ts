import { Component, OnInit } from '@angular/core';
import { HeroDetailsModel } from 'src/app/Models/hero-details.model';
import { BehaviourDataService } from 'src/app/services/behaviour-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  itemCards: HeroDetailsModel;

  constructor( private behaviorSrv: BehaviourDataService ) { }

  ngOnInit() {
    this.behaviorSrv.$getObjectSource.subscribe( (resp: HeroDetailsModel)=>{
      this.itemCards = resp;
      console.log('this.itemCards', this.itemCards);
    }).unsubscribe();
  }

}
