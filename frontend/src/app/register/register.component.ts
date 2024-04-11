import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Note the corrected property name
})
export class RegisterComponent {
  name:string="";
  email:string="";
  mobile:number = 0;
  age:number=0;
  password:string="";
  errorMessage: string = "";
  
  constructor(private http: HttpClient, private router: Router) {} // Inject Router in constructor
  
  onSubmit()
  {
  let formData = {
    "name": this.name,
    "email": this.email,
    "mobile": this.mobile,
    "age": this.age,
    "password": this.password
  };
  this.http.post('http://localhost:8000/api/users/register',formData,{ responseType: 'text' })
  .subscribe(
    (data: any) => {
      console.log(data); // Log the response
      if (data === 'User registered successfully')
      {
        alert("Registered Successfully");
            // Reset form fields
            this.name = '';
            this.email = '';
            this.mobile = 0;
            this.age = 0;
            this.password = '';
            this.router.navigateByUrl('/login');
      }else {
        alert("An error occurred while registering. Please try again later.");
      }
    },
    (error: HttpErrorResponse) => {
      console.error('An error occurred:', error.error);
      alert("An error occurred while registering. Please try again later.");
    }
  );
  
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login'); // Navigate to the register page
  }
}

