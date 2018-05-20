import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company : any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //alert('In ng init');
    this.http.get('/company').subscribe(
      data =>  {
        //alert(data);
         this.company = data;
    });
  }
}
