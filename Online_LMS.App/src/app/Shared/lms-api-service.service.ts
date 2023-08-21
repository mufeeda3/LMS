import { Injectable } from '@angular/core';
import { HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LmsApiServiceService {

  constructor(public client: HttpClient,
    public navigation: Router) {

  }

  public get userToken(): string {
    var user_token = localStorage.getItem('Authentication.Session');
    if (user_token && user_token.length > 0) {
      return user_token;
    }
    return '';
  }

  public set userToken(user_token: string) {
    if (!user_token) {
      user_token = '';
    }
    localStorage.setItem('Authentication.Session', user_token);
  }

  public get userName(): string {
    var name = localStorage.getItem('Authentication.UserName');
    if (name && name.length > 0) {
      return name;
    }
    return '';
  }

  public set userName(name: string) {
    if (!name) {
      name = '';
    }
    localStorage.setItem('Authentication.UserName', name);
  }

  public get userEmail(): string {
    var email = localStorage.getItem('Authentication.UserEmail');
    if (email && email.length > 0) {
      return email;
    }
    return '';
  }

  public set userEmail(email: string) {
    if (!email) {
      email = '';
    }
    localStorage.setItem('Authentication.UserEmail', email);
  }

  public get userRole(): string {
    var role_name = localStorage.getItem('Authentication.UserRole');
    if (role_name && role_name.length > 0) {
      return role_name;
    }
    return '';
  }

  public set userRole(role_name: string) {
    if (!role_name) {
      role_name = '';
    }
    localStorage.setItem('Authentication.UserRole', role_name);
  }

  public IsLoggedIn(): boolean {
    // console.debug({ token: this.userToken, email: this.userEmail });
    if (this.userToken.length < 20) {
      return false;
    }
    if (this.userEmail.length < 1) {
      return false;
    }
    return true;
  }

  public getHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return headers;
  }

  public getAuthHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'auth-token': this.userToken
    });
    return headers;
  }

  public baseUrl(): string {
    return 'http://localhost:5072/api';
  }

  public getUrl(controller: string, action: string) {
    return this.baseUrl() + '/' + controller + '/' + action;
  }

  public postAdmin(action: string, data: any): Observable<any> {
    return this.client.post(this.getUrl('Admin', action), data, { headers: this.getAuthHeaders() }).pipe(
      catchError((error: any) => {
        if (error.status == 401) {
          this.navigation.navigate(['/auth/login']);
        }
        throw error;
      })
    );
  }

  public postLms(action: string, data: any): Observable<any> {
    return this.client.post(this.getUrl('Lms', action), data, { headers: this.getAuthHeaders() }).pipe(
      catchError((error: any) => {
        if (error.status == 401) {
          this.navigation.navigate(['/auth/login']);
        }
        throw error;
      })
    );
  }

  public postUser(action: string, data: any): Observable<any> {
    return this.client.post(this.getUrl('Authentication', action), data, { headers: this.getHeaders() });
  }
}
