import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 5100;

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
  }
  authenticate(user: string, pass: string): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + 'auth/login', {
        username: user,
        password: pass,
      })
      .pipe(
        map((response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          localStorage.setItem('UserId', response.id);
          // this.auth_token = response ? response.token : null;
          console.log(response);
          return response;
        })
      );
  }
}
