
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'FRSDemoFrontend';
  jsonString = `{"dateOfBirth": "2001-01-01","firstName": "John","middleName": "The","lastName": "Doe","stateOfResidence": "NY"}`;
  addSubject(){
    console.log("adding person");
    this.http.post('http://localhost:5050/api/subjects', this.jsonString,{
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(response => {
      console.log(response);
    });
  
  }
}
