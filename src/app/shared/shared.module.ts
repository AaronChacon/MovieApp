import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PostersComponent } from './posters/posters.component';
import { PosterImgPipe } from './pipes/poster-img.pipe';
import { MovieImgPipe } from './pipes/movie-img.pipe';
import { CategoriesPipe } from './pipes/categories.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    PostersComponent,
    PosterImgPipe,
    MovieImgPipe,
    CategoriesPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    PostersComponent,
    PosterImgPipe,
    MovieImgPipe,
    CategoriesPipe
  ]
})
export class SharedModule { }
