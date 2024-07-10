import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe(response => {
      console.log('Login successful', response);
      // Handle successful login (e.g., store token, navigate to another page)
    }, error => {
      console.error('Login failed', error);
    });
  }
}

