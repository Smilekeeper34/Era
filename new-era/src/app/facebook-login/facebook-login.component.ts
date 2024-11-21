import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-login',
  standalone: true,
  imports:[CommonModule],// hie Ngonin , make sure that if you are using standalone componets you check the console panel on the browser for errors
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