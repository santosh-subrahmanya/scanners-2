import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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