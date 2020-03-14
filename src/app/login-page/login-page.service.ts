import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
const userCheckValidUrl = '/api/user/checkValid';

@Injectable({
  providedIn: 'root',
})
export class LoginPageService  {

constructor(private http: HttpClient) {

}
  login(username: string, password: string) {
    return this.http.post<any>(userCheckValidUrl, { username, password })
      .pipe(map(user => {
        return user;
      }));
  }


}
