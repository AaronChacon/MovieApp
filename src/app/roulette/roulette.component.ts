import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  topMovie$:Observable<any> 
  loadArrays = [ true, true, true, true];
  loading:boolean = false;
  results: any[] = [];

  constructor(
    public _ms:MovieService, 
  ) {
   this.upcomingMovie()
  }

  ngOnInit(): void {
    
  }

  upcomingMovie(){
    this.loading = true;
    this._ms.getUpcoming()
      .subscribe((resp:any) => {
        this.results = resp.results
        console.log(resp);
        console.log(resp.results);
        this.loading = false;
      })

  }

}
