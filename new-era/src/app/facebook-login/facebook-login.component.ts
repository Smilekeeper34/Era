import { Component } from '@angular/core';

@Component({
  selector: 'app-social-login',
  standalone: true,
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css'],
})
export class FacebookLoginComponent {
  loginResponse: string | null = null;

  loginWithFacebook(): void {
    // Facebook login logic here
    this.loginResponse = 'Logged in with Facebook';
  }

  loginWithPassword(): void {
    // Password login logic here
    this.loginResponse = 'Logged in with Password';
  }
}