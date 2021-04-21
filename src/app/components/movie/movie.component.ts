import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from "@angular/router";

import { 
  SwiperComponent, 
  SwiperDirective, 
  SwiperConfigInterface,
  SwiperScrollbarInterface, 
  SwiperPaginationInterface 
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie:any;
  returnTo:string = "";
  search:string = "";
  populares: any;

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

    this._ms.getPopulares()
      .subscribe(data =>{
        this.populares = data;
        console.log(this.populares);
    })

  }

  ngOnInit(): void {
  }

  public configMainA: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    loop: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };
}
