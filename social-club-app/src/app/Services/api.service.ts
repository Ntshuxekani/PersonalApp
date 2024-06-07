import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/members`);
  }

  createMember(member: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/members`, member);
  }
  
}
