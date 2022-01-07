import { Component, OnInit } from '@angular/core';
import { BehaviourDataService } from 'src/app/services/behaviour-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  constructor( private behaviorSrv: BehaviourDataService ) { }

  ngOnInit() {
    this.behaviorSrv.$getarrayTapBind.subscribe( (resp)=>{
      console.log('$getarrayTapBind',resp);
    }).unsubscribe();
  }

}
