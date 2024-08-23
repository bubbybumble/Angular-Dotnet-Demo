import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent {
  constructor(private http: HttpClient) {}
  @Input() data: subject[] = [];
  displayStyle = "none"; 
  public getData(): void {


    this.http.get('http://localhost:5050/api/subjects').pipe(map((data:any) => {
      this.data = data;

    })).subscribe(_ => console.log("data fetched successfully"));

  }

  subjectForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    middleName: new FormControl(""),
    lastName: new FormControl(""),
    dateOfBirth: new FormControl(""),
    stateOfResidence: new FormControl(""),
  });

  //jsonString = `{"dateOfBirth": "2001-01-01","firstName": "John","middleName": "The","lastName": "Doe","stateOfResidence": "NY"}`;
  addSubject(){
    console.log(this.subjectForm.value);
    this.http.post('http://localhost:5050/api/subjects', this.subjectForm.value,{
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(response => {
      console.log(response);
    });
    this.closePopup();
  }

  openPopup(){
    this.displayStyle = "block"; 
  }
  closePopup(){
    this.displayStyle = "none"; 
  }
  async ngAfterViewInit(): Promise<void> {
    
    this.getData(); // Eventually in a real project I would like to have made this into a service
    
  }

}
