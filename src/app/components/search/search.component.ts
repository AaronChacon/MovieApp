import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchMovieInput:string = ""

  constructor( public _ms:MovieService, 
                public route:ActivatedRoute ) {
                
      this.route.params.subscribe(params =>{
        console.log(params);

        if (params['texto']) {
          this.searchMovieInput = params['texto'];
          this.searchMovie()
        }
        
      })
  }

  ngOnInit(): void {
  }

  searchMovie(){
    if (this.searchMovieInput.length == 0) {
      return;
    }
    this._ms.searchMovieServices(this.searchMovieInput).subscribe()

    
  }

}
