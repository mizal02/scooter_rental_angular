import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { User } from '../model/user';
import { Rental } from '../model/rental';

const PROTOCOL = 'http';
const PORT = 5100;
const UserId = localStorage.getItem('UserId');
const token = localStorage.getItem('token');

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
  }

  myHeaders = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
    }),
  };

  regHeaders = new HttpHeaders();

  getUserDetails(): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}users/${UserId}`, this.myHeaders)
      .pipe(tap(console.log));
  }

  startRent(): Observable<User> {
    return this.http
      .post<User>(
        `${this.baseUrl}users/${UserId}/startRent`,
        null,
        this.myHeaders
      )
      .pipe(tap(console.log));
  }

  stopRent(): Observable<User> {
    return this.http
      .post<User>(
        `${this.baseUrl}users/${UserId}/endRent`,
        null,
        this.myHeaders
      )
      .pipe(tap(console.log));
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.baseUrl}auth/register`,
        { username, email, password },
        { headers: this.regHeaders, observe: 'response' }
      )
      .pipe(tap(console.log));
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}users`, this.myHeaders)
      .pipe(tap(console.log));
  }

  deactive(userId: string): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}auth/deactive/${userId}`, userId, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
        observe: 'response',
      })
      .pipe(tap(console.log));
  }
}
