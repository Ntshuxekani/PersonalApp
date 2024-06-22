import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'https://your-backend-api-url.com/api/auth';

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { email, password });
  }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, { email, password });
  }

  signOut(): void {
    // Handle sign out logic, e.g., remove token from local storage
  }

 // getUser(): Observable<any> {
    // Get user details logic
  }

