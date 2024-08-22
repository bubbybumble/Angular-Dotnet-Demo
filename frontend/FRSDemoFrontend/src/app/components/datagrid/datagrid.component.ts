import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


interface subject {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  stateOfResidence: string;
  recId: string;
}

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent {
  constructor(private http: HttpClient) {}
  @Input() data: subject[] = [];
  public getData(): void {


    this.http.get('http://localhost:5050/api/subjects').pipe(map((data:any) => {
      this.data = data;
      
      // for (let i = 0; i < this.data.length; i++) {
      //   console.log(this.data[i]);
      // }

    })).subscribe(_ => console.log("data fetched successfully"));

  }

  jsonString = `{"dateOfBirth": "2001-01-01","firstName": "John","middleName": "The","lastName": "Doe","stateOfResidence": "NY"}`;
  addSubject(){
    console.log("adding person");
    this.http.post('http://localhost:5050/api/subjects', this.jsonString,{
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(response => {
      console.log(response);
    });
  
  }

  async ngAfterViewInit(): Promise<void> {
    
    this.getData(); // Eventually in a real project I would like to have made this into a service
    
  }

}
