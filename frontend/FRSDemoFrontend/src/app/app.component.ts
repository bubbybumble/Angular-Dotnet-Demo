
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
  

}
