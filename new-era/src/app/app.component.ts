import { Component } from '@angular/core';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component'; // Adjust the path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FacebookLoginComponent], // Import the FacebookLoginComponent directly
})
export class AppComponent {
  title = 'Your Application Title'; // Optional: Set the application title
}