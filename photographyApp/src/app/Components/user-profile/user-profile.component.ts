import { Component, OnInit } from '@angular/core';
import { BookingServiceService} from 'src/app/Services/booking-service.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  bookings: any[] | undefined;
  authService: any;
  bookingService: any;

  constructor(private bookingServiceService: BookingServiceService, private authServiceService: AuthServiceService) {
    this.authService.getUser().subscribe((user: any) => {
      this.user = user;
      if (this.user) {
        this.fetchBookings();
      }
    });
  }

  ngOnInit(): void {}

  fetchBookings() {
    this.bookingService.getBookings(this.user.id).subscribe((bookings: any[]) => {
      this.bookings = bookings;
    });
  }
}
