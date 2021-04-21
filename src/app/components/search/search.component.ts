import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchMovieInput:string = "";
  loadArrays = [ true, true, true, true];
  loading:boolean = false;
  results: any[] = [];
  constructor( 
    public _ms:MovieService, 
    public route:ActivatedRoute 
  ) {              
      this.route.params.subscribe(params =>{
        if (params['texto']) {
          this.searchMovieInput = params['texto'];
          this.searchMovie()
        }
        
      })
  }

  ngOnInit(): void {
  }

  searchMovie(){
    this.loading = true;
    console.log(this.loading);
    if (this.searchMovieInput.length == 0) {
      this.loading = false;
      return;
    }
    this._ms.searchMovieServices(this.searchMovieInput)
    .subscribe((resp:any) => {
      this.results = resp.results;
      console.log(resp);
      this.loading = false;
    }) 
  }

}
