import { Component } from '@angular/core';
import { BookingServiceService} from 'src/app/Services/booking-service.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  user: any;
  date: string = ''; // Initialize date property
  serviceType: string = '';
  authService: any;
  bookingService: any;

  constructor(private bookingServiceService: BookingServiceService, private authServiceService: AuthServiceService) {
    this.authService.getUser().subscribe((user: any) => {
      this.user = user;
    });
}
book() {
  if (this.user) {
    this.bookingService.createBooking(this.user.id, this.date, this.serviceType).subscribe(() => {
      alert('Booking successful!');
    });
  } else {
    alert('Please sign in first.');
  }
}
}
