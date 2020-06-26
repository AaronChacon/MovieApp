import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie:any;
  returnTo:string = "";
  search:string = "";

  constructor( public _ms:MovieService, 
    public route:ActivatedRoute ) {
    
    this.route.params.subscribe(params =>{
    console.log(params);

    this.returnTo = params['pag'];

    if (params['search']) {
      this.search = params['search']
      
    }

    this._ms.getMovie(params['id'])
      .subscribe( movie => {
        this.movie = movie 
        console.log(movie)

      })

      


    })
}

  ngOnInit(): void {
  }

}
