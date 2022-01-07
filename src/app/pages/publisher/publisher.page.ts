import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.page.html',
  styleUrls: ['./publisher.page.scss'],
})
export class PublisherPage implements OnInit {

  title: string;
  
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe( (param) => this.title = param.title );
  }

}
