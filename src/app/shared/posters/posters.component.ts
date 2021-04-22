import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent implements OnInit {

  @Input('movies') movies;
  @Input('configSwipper') configSwipper;
  @Input('titleSection') titleSection;

  constructor() { }

  ngOnInit(): void {
    if(this.movies){
      console.log(this.movies);
    }
  }

}
