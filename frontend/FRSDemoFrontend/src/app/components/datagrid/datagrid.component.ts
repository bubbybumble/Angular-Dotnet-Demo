import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent {
  constructor(private http: HttpClient) {}
  @Input() response = null;
  async getData(): Promise<any> {
    this.http.get('http://localhost:5050/api/subjects').subscribe(res => {
      console.log(res);
    });

  }

  async ngAfterViewInit(): Promise<void> {
    
    await this.getData();

  }

}
