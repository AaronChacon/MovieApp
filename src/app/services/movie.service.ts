import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  moviePopular: any = {}; 
  moviesSearch: any[] = [];

  public apikey:string = "2fce94e599b9cfa18f31556173677027";
  private urlMoviedb:string ="https://api.themoviedb.org/3";

  constructor(private HttpClient: HttpClient) { }

  getEstrenos(){
    let url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&language=es-US&page=1`;
    return this.HttpClient.get(url)
              .pipe(map(res => res)) 
  }

  getPopulares(){
    let url = `${this.urlMoviedb}/movie/popular?api_key=${this.apikey}&language=es&page=1`;
    return this.HttpClient.get(url)
              .pipe(map(res => res)) 
  }
  
  getDestacadas(){
    let url = `${this.urlMoviedb}/movie/top_rated?api_key=${this.apikey}&language=es&page=1`;
    return this.HttpClient.get(url)
              .pipe(map(res => res)) 
  }

  searchMovieServices(texto:string){
    interface ItemsResponse {
      results: string[];
    }

    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apikey}&query=${texto}&language=es`

    return this.HttpClient.get<ItemsResponse>(url)
                .pipe(map(res =>{
                  this.moviesSearch = res.results
                  console.log(this.moviesSearch);
                  return res
                  
                }))

  }

  getMovie(id:string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;

    return this.HttpClient.get(url)
                .pipe(map(res => res))
  }

}
