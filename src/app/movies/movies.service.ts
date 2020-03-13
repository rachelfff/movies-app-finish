import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Movie} from './movie';
const getCategoriesUrl = '/api/categories';
const getMoviesUrl = '/api/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService  {

constructor(private http: HttpClient) {

}
    getMoviesList(): Observable<Movie[]> {
      return this.http.request('GET' , getMoviesUrl ).pipe(
        map((res: Movie[]) => res ));
    }

  getCategoriesList(): Observable<object> {
    return this.http.request('GET' , getCategoriesUrl ).pipe(
      map((res: object) => res ));
  }
   addNewMovie(): Observable<any> {
     return this.http.request('GET' , getCategoriesUrl ).pipe(
       map((res: object) => res ));
   }
}
