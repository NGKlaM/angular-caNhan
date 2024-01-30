// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://hoadv-nodejs.vercel.app/auth';

  constructor(private http: HttpClient) {}
  loginUser(user: any): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post<any>(loginUrl, user);
  };
  registerUser(user: any): Observable<any> {
    console.log(user)
    const registerUrl = `${this.apiUrl}/register`;
    return this.http.post<any>(registerUrl, user);
  }
}
