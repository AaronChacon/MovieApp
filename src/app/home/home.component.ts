import { Component, ViewChild, OnInit } from '@angular/core';

import { 
  SwiperConfigInterface,
  SwiperScrollbarInterface, 
  SwiperPaginationInterface 
} from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  /* 
  cartelera: any;
  populares: any;
  destacadas: any; 
  */

  cartelera$: Observable<any>;
  populares$: Observable<any>;
  destacadas$: Observable<any>;

  constructor( private _movieService: MovieService ) {
  
    /* this._movieService.getEstrenos()
      .subscribe(data =>{
        this.cartelera = data;
        console.log(this.cartelera); 
    }) */

    /* this._movieService.getPopulares()
      .subscribe(data =>{
        this.populares = data;
        console.log(this.populares);
    }) */

    /* this._movieService.getDestacadas()
      .subscribe(data =>{ 
        this.destacadas = data;
        console.log(this.destacadas);
        return data
    }) */

    this.cartelera$ = this._movieService.getEstrenos()

    this.populares$ =this._movieService.getPopulares()
    
    this.destacadas$ = this._movieService.getDestacadas();
    

  }
  
  ngOnInit() {
    
  }



  //Swiper//

  public configHeader: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    /* autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }, */
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
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

  public configMainA: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 25,
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
    loop: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  public configMainB: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
      delay: 10000,
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
    loop: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
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