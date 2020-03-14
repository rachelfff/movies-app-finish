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
   addNewMovie(newMovie: Movie): Observable<Movie[]> {
     return this.http.post<any>(getMoviesUrl, {newMovie})
    .pipe(map(newListMovies => {
      console.log('ssss' , newListMovies);
      return newListMovies.newMovies;
    }));
   }
  deleteMovie(name: string) {
    return this.http.delete<any>(`api/movies/${name}`).pipe(map(newListMovies => {
      return newListMovies;
    }));
  }
}
