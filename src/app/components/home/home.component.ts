import { Component, ViewChild, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

import { 
  SwiperComponent, 
  SwiperDirective, 
  SwiperConfigInterface,
  SwiperScrollbarInterface, 
  SwiperPaginationInterface 
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  destacadas: any;

  constructor( private _movieService: MovieService ) {
  
    this._movieService.getEstrenos()
      .subscribe(data =>{
        this.cartelera = data;
        console.log(this.cartelera); 
    })

    this._movieService.getPopulares()
      .subscribe(data =>{
        this.populares = data;
        console.log(this.populares);
    })

    this._movieService.getDestacadas()
      .subscribe(data =>{ 
        this.destacadas = data;
        return data
        console.log(this.destacadas);
    })

  }
  
  ngOnInit() {
    
  }



  //Swiper//

  public slides = [
    'https://picsum.photos/700/250/?image=27',
    'https://picsum.photos/700/250/?image=22',
    'https://picsum.photos/700/250/?image=61',
    'https://picsum.photos/700/250/?image=23',
    'https://picsum.photos/700/250/?image=24',
    'https://picsum.photos/700/250/?image=26',
    'https://picsum.photos/700/250/?image=41',
    'https://picsum.photos/700/250/?image=28',
    'https://picsum.photos/700/250/?image=21',
    'https://picsum.photos/700/250/?image=20',
    'https://picsum.photos/400/250/?image=75'
];

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