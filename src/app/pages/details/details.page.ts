import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  title: string;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe( (param) => this.title = param.title );
  }

}
