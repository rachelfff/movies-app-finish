import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Users} from './users';
import {map} from 'rxjs/operators';
const getUsersUrl = '/api/users';

@Injectable({
  providedIn: 'root',
})
export class LoginPageService  {

constructor(private http: HttpClient) {

}
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
    getUsersList(): Observable<Users> {
      return this.http.request('GET' , getUsersUrl ).pipe(
        map((res: Users) => res));
    }

}
