import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  private apiUrl = 'https://your-backend-api-url.com/api/bookings';

  constructor(private http: HttpClient) { }
  createBooking(userId: string, date: string, serviceType: string): Observable<any> {
    return this.http.post(this.apiUrl, { userId, date, serviceType });
  }

  getBookings(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?userId=${userId}`);
  }
}
