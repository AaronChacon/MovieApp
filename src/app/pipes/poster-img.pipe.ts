import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterImg'
})
export class PosterImgPipe implements PipeTransform {

  transform(poster: any): any {

    const url = 'https://image.tmdb.org/t/p/original';

    if (poster.poster_path) {
      return url + poster.poster_path
      
    }else{
      if (poster.backdrop_path) {
        return url + poster.backdrop_path
      }else{
        return "assets/img/no-img.png"
      }
    }

    return null;
  }

}
