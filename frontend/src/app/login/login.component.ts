import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Import HttpClient for API requests

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private router: Router, private http: HttpClient) {} // Inject Router and HttpClient in constructor
  onSubmit() {
    const formData = {
      "email": this.email,
      "password": this.password
    };

    // Send login request to the server
    this.http.post<any>('http://localhost:8000/api/users/login', formData)
      .subscribe({
        next: (data) => {
          console.log(data); // Handle successful response here
          alert("Logged in successfully!");
          this.email = '';
          this.password = '';
          // Redirect to dashboard or any other page upon successful login
          // this.router.navigateByUrl('/dashboard');
        },
        error: (error: HttpErrorResponse) => {
          console.error('An error occurred:', error.error);
          this.errorMessage = "Invalid email or password. Please try again."; // Display error message
        }
      });
  }

  navigateToRegister() {
    this.router.navigateByUrl('/register'); // Navigate to the register page
  }
}
